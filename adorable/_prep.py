from pathlib import Path
import shutil

root = Path(__file__).parent
image_dir = root / "assets" / "images"
video_dir = root / "assets" / "video"
image_dir.mkdir(parents=True, exist_ok=True)
video_dir.mkdir(parents=True, exist_ok=True)

for folder in (image_dir, video_dir):
    for existing in folder.iterdir():
        if existing.is_file():
            existing.unlink()

for source in root.iterdir():
    if source.is_file() and (source.name == "logo.png" or source.suffix.lower() in {".jpg", ".jpeg"}):
        shutil.copy2(source, image_dir / source.name)
    elif source.is_file() and source.name.startswith("video_") and source.suffix.lower() == ".mp4":
        shutil.copy2(source, video_dir / source.name)

print("Synced supplied photos, videos, and logo into assets.")
