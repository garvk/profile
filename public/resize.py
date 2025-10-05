from PIL import Image

img = Image.open("/Users/garvkhurana/in5/wtf-submission/public/GK.png")
img = img.resize((32, 32))
img.save("/Users/garvkhurana/in5/wtf-submission/public/avicon.ico")
