from pathlib import Path
import shutil

root = Path(__file__).parent
image_dir = root / "assets" / "images"
video_dir = root / "assets" / "video"
image_dir.mkdir(parents=True, exist_ok=True)
video_dir.mkdir(parents=True, exist_ok=True)

images = {
    "balcony-hero.jpeg": "WhatsApp Image 2026-11-05 at 20.57.48.jpeg",
    "balcony-bedroom.jpeg": "WhatsApp Image 2026-11-05 at 20.57.49.jpeg",
    "balcony-bedroom-suite.jpeg": "WhatsApp Image 2026-11-05 at 20.57.49 (1).jpeg",
    "balcony-family-bedroom.jpeg": "WhatsApp Image 2026-11-05 at 20.57.49 (2).jpeg",
    "balcony-bathroom.jpeg": "WhatsApp Image 2026-11-05 at 20.57.50.jpeg",
    "balcony-kitchen.jpeg": "WhatsApp Image 2026-11-05 at 20.57.50 (1).jpeg",
    "balcony-dining.jpeg": "WhatsApp Image 2026-11-05 at 20.57.48 (2).jpeg",
    "balcony-entrance.jpeg": "WhatsApp Image 2026-11-05 at 20.57.47 (3).jpeg",
    "balcony-room-detail.jpeg": "WhatsApp Image 2026-11-05 at 20.57.47 (2).jpeg",
}

for existing in image_dir.iterdir():
    if existing.is_file():
        existing.unlink()
for existing in video_dir.iterdir():
    if existing.is_file():
        existing.unlink()

shutil.copy2(root / "logo.png", image_dir / "logo.png")
for destination, source in images.items():
    shutil.copy2(root / source, image_dir / destination)
for video in ("vid-one.mp4", "vid-two.mp4", "vid-three.mp4"):
    shutil.copy2(root / video, video_dir / video)

print("Synced supplied photos, logo, and videos into assets.")
