f = open('lemmad2013.txt')

lines = [l.strip() for l in f.readlines()]

w = open('words.txt', 'w')

alphabet = 'ABCDEFGHIJKLMNOPQRSŠZŽTUVWÕÄÖÜXY'.lower()

for l in lines:
    if len(l) > 5 and l.islower() and all(c in alphabet for c in l):
        w.write(l + '\n')
    