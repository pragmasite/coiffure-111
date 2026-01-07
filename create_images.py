from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs('public/images', exist_ok=True)

# Create hero background (modern salon aesthetic)
hero = Image.new('RGB', (1920, 1080), color=(245, 243, 238))
draw = ImageDraw.Draw(hero)

# Add subtle gradient effect and text
for y in range(1080):
    gray = int(220 + (y / 1080) * 20)
    draw.line([(0, y), (1920, y)], fill=(gray, gray - 5, gray - 10))

# Add subtle salon elements text
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80)
    draw.text((960, 540), "Coiffure 111", fill=(100, 120, 130), anchor="mm", font=font)
except:
    draw.text((960, 540), "Coiffure 111", fill=(100, 120, 130), anchor="mm")

hero.save('public/images/hero-bg.jpg', 'JPEG', quality=85)

# Create gallery images (simple placeholders with different aesthetics)
colors_and_titles = [
    ((200, 180, 160), "Coupe moderne"),
    ((180, 160, 140), "Coloration"),
    ((220, 200, 180), "Styling"),
    ((190, 170, 150), "Extensions"),
    ((210, 190, 170), "Traitement"),
    ((185, 165, 145), "Coupe courte"),
]

for idx, (color, title) in enumerate(colors_and_titles, 1):
    img = Image.new('RGB', (600, 450), color=color)
    draw = ImageDraw.Draw(img)
    
    # Add gradient
    for y in range(450):
        intensity = int(color[0] * (1 - y/450) + 240 * (y/450))
        draw.line([(0, y), (600, y)], fill=(intensity, intensity - 20, intensity - 40))
    
    # Add text
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 32)
        draw.text((300, 225), title, fill=(255, 255, 255), anchor="mm", font=font)
    except:
        draw.text((300, 225), title, fill=(255, 255, 255), anchor="mm")
    
    img.save(f'public/images/gallery-{idx}.jpg', 'JPEG', quality=85)

print("Images created successfully")
