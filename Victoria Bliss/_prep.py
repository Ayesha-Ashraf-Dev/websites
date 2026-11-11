from PIL import Image
from collections import Counter
import os

img = Image.open("logo.png").convert("RGB")
q = img.convert("P", palette=Image.ADAPTIVE, colors=8).convert("RGB")
c = Counter(
    p for p in q.getdata() if not (p[0] > 240 and p[1] > 240 and p[2] > 240)
)
print("LOGO COLORS")
for color, n in c.most_common(10):
    print(n, "#%02x%02x%02x" % color, color)

os.makedirs("assets/video", exist_ok=True)
os.makedirs("assets/images", exist_ok=True)
os.makedirs("_previews", exist_ok=True)

try:
    import cv2

    vids = [
        ("WhatsApp Video 2026-10-24 at 15.46.46.mp4", "hero"),
        ("WhatsApp Video 2026-10-24 at 15.47.47.mp4", "lifestyle"),
    ]
    for path, name in vids:
        cap = cv2.VideoCapture(path)
        fps = cap.get(cv2.CAP_PROP_FPS) or 1
        frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)
        w = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
        h = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)
        dur = frames / fps
        print(f"{name}: {w}x{h} fps={fps:.2f} frames={int(frames)} dur={dur:.1f}s size={os.path.getsize(path)}")
        for i, t in enumerate([0.15, 0.45, 0.75]):
            cap.set(cv2.CAP_PROP_POS_FRAMES, int(frames * t))
            ok, fr = cap.read()
            if ok:
                cv2.imwrite(f"_previews/{name}_{i}.jpg", fr, [int(cv2.IMWRITE_JPEG_QUALITY), 85])
                if i == 1:
                    cv2.imwrite(
                        f"assets/video/{name}-poster.jpg",
                        fr,
                        [int(cv2.IMWRITE_JPEG_QUALITY), 82],
                    )
        cap.release()
except Exception as e:
    print("VIDEO ERR", e)

# Optimize images
from pathlib import Path

out_dir = Path("assets/images")
mapping = {
    "room1_one.jpeg": "living-lounge.jpg",
    "room1_two.jpeg": "living-warm.jpg",
    "room1_three.jpeg": "dining-table.jpg",
    "room1_four.jpeg": "living-open.jpg",
    "room1_five.jpeg": "living-evening.jpg",
    "room2_1.jpeg": "exterior-porch.jpg",
    "room2_2.jpeg": "exterior-detail.jpg",
    "room2_3.jpeg": "exterior-front.jpg",
    "room2_4.jpeg": "exterior-wing.jpg",
    "room3_1.jpeg": "lounge-styled.jpg",
    "room3_2.jpeg": "armchair-detail.jpg",
    "room3_3.jpeg": "sofa-textiles.jpg",
    "room4_1.jpeg": "bedroom-suite.jpg",
    "room4_2.jpeg": "bedroom-linen.jpg",
    "room4_3.jpeg": "bedroom-light.jpg",
}

def save_variants(src, dest_name):
    im = Image.open(src).convert("RGB")
    # main web image max 1600
    im2 = im.copy()
    im2.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
    im2.save(out_dir / dest_name, "JPEG", quality=82, optimize=True, progressive=True)
    # card crop-friendly 1200
    im3 = im.copy()
    im3.thumbnail((1100, 1100), Image.Resampling.LANCZOS)
    stem = Path(dest_name).stem
    im3.save(out_dir / f"{stem}-md.jpg", "JPEG", quality=78, optimize=True, progressive=True)

logo = Image.open("logo.png")
logo.save("assets/images/logo.png", "PNG", optimize=True)

for src, dest in mapping.items():
    if os.path.exists(src):
        save_variants(src, dest)
        print("saved", dest)

print("done")
