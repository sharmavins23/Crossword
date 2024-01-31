# Script for quickly generating the HTML for the QR code board

genString = ""

for i in range(21):
    for j in range(21):
        genString += f"<input type=\"text\" id=\"{i}_{j}\" "
        genString += f"class=\"cell\" "
        genString += f"onkeyup=\"cell(this);\" "
        genString += "/>\n"

with open("scripts/gen.html", "w") as f:
    f.write(genString)