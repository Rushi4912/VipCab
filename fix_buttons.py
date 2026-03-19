import os
import re

files_to_fix = [
    'app/[slug]/page.tsx',
    'app/ertiga-cab-service/page.tsx',
    'app/dzire-cab-service/page.tsx',
    'app/services/[serviceSlug]/page.tsx',
    'app/innova-crysta-cab-service/page.tsx',
    'app/page.tsx',
]

for fpath in files_to_fix:
    full = os.path.join('/home/rushikesh/Desktop/vipcab', fpath)
    if not os.path.exists(full):
        print(f"SKIP: {fpath}")
        continue
    with open(full, 'r') as f:
        text = f.read()
    
    # Fix: bg-accent ... text-primary -> text-white
    # Fix: hover:bg-accent-light -> hover:bg-accent-dark
    text = text.replace('text-primary hover:bg-accent-light', 'text-white hover:bg-accent-dark')
    
    # Fix: hover:bg-accent hover:text-primary -> hover:bg-accent-dark hover:text-white 
    text = text.replace('hover:bg-accent hover:text-primary', 'hover:bg-accent-dark hover:text-white')
    
    with open(full, 'w') as f:
        f.write(text)
    print(f"FIXED: {fpath}")

print("All done!")
