from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image, ImageOps


PROJECT = Path(__file__).resolve().parents[1]
WORKSPACE = PROJECT.parent
SOURCE = WORKSPACE / "source"
PUBLIC = PROJECT / "public"
MEDIA = PUBLIC / "media"
DATA_FILE = PROJECT / "src" / "data" / "media.generated.json"


def numbered_files(folder: Path) -> list[Path]:
    """按图片文件名中的编号排序。"""
    files = [path for path in folder.iterdir() if path.suffix.lower() in {".jpg", ".jpeg", ".png"}]
    return sorted(files, key=lambda path: int(path.stem))


def convert_image(source: Path, destination: Path, max_edge: int = 2200) -> tuple[int, int]:
    """生成去除EXIF的WebP副本，不修改原始素材，也不放大小图。"""
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as raw:
        image = ImageOps.exif_transpose(raw).convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=80, method=4, optimize=True)
        return image.size


def media_record(path: str, alt: str, group: str, size: tuple[int, int]) -> dict[str, object]:
    return {
        "src": path,
        "alt": alt,
        "group": group,
        "width": size[0],
        "height": size[1],
    }


def main() -> None:
    manifest: dict[str, list[dict[str, object]]] = {"gallery": [], "work": [], "tech": []}

    gallery_sources = [
        ("无锡", SOURCE / "生活相册" / "美景" / "无锡" / "picture", "wuxi"),
        ("南京", SOURCE / "生活相册" / "美景" / "南京" / "picture", "nanjing"),
        ("苏州", SOURCE / "生活相册" / "美景" / "苏州" / "picture", "suzhou"),
        ("美食", SOURCE / "生活相册" / "美食" / "picture", "food"),
    ]

    for group, folder, output_folder in gallery_sources:
        for index, source in enumerate(numbered_files(folder), start=1):
            destination = MEDIA / "gallery" / output_folder / f"{index:02d}.webp"
            size = convert_image(source, destination)
            if group == "美食":
                alt = f"美食与朋友相聚的生活记录 {index:02d}"
            else:
                alt = f"{group}的城市与风景记录 {index:02d}"
            manifest["gallery"].append(
                media_record(f"/media/gallery/{output_folder}/{index:02d}.webp", alt, group, size)
            )

    work_folder = SOURCE / "工作中的我" / "picture"
    for index, source in enumerate(numbered_files(work_folder), start=1):
        destination = MEDIA / "work" / f"{index:02d}.webp"
        size = convert_image(source, destination)
        manifest["work"].append(
            media_record(f"/media/work/{index:02d}.webp", f"工作与项目记录 {index:02d}", "工作", size)
        )

    tech_folder = SOURCE / "技术分享" / "picture"
    for index, source in enumerate(numbered_files(tech_folder), start=1):
        destination = MEDIA / "tech" / f"{index:02d}.webp"
        size = convert_image(source, destination)
        manifest["tech"].append(
            media_record(f"/media/tech/{index:02d}.webp", f"技术小实验记录 {index:02d}", "技术", size)
        )

    personal_output = MEDIA / "personal" / "wechat-qr.png"
    personal_output.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(SOURCE / "个人简介" / "1.png", personal_output)

    downloads = PUBLIC / "downloads"
    downloads.mkdir(parents=True, exist_ok=True)
    shutil.copy2(
        SOURCE / "工作中的我" / "doc" / "嵌入式软件工程师谢佳涵的简历.pdf",
        downloads / "嵌入式软件工程师谢佳涵的简历.pdf",
    )

    DATA_FILE.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    total_bytes = sum(path.stat().st_size for path in MEDIA.rglob("*") if path.is_file())
    print(f"已生成 {len(manifest['gallery']) + len(manifest['work']) + len(manifest['tech']) + 1} 个网站图片文件")
    print(f"优化后图片总量：{total_bytes / 1024 / 1024:.1f} MB")
    print(f"简历：{downloads / '嵌入式软件工程师谢佳涵的简历.pdf'}")


if __name__ == "__main__":
    main()
