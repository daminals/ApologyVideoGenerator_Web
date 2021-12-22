import os

for i in os.listdir('Finished'):
    if not i=='.gitkeep':
        os.remove('Finished/' + i)
print("it is done")
