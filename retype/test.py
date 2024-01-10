def insert_new_lines_in_str(text, every=15):
        lines = []
        for i in range(0, len(text), every):
            lines.append(text[i:i+every])
        return "\n".join(lines)


text = "Este es un texto muy largo qapso diaposdfjpo aisfjdpo iasdfpjoia sdjpfoia jsñdfoiañsid fñsi ñdiñl añl asd fasdf asdf asdfasdfa sdfasdfa"
print(insert_new_lines_in_str(text))