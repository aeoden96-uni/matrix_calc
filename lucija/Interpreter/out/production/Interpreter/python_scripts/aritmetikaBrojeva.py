from __future__ import division
from pj import *

class TT(enum.Enum):
    PLUS, PUTA, MINUS, OTVORENA, ZATVORENA, NA, KROZ = '+', '*', '-', '(', ')' , '^', '/'
    class CBROJ(Token):
        def vrijednost(self):
            return int(self.sadržaj)
    class DBROJ(Token):
        def vrijednost(self):
            return float(self.sadržaj)

def l_lex(kod):
    lex = Tokenizer(kod)
    for znak in iter(lex.čitaj, ''):
        if znak.isspace():
            lex.zanemari()
        elif znak == '.':
            raise LeksičkaGreška('Nedozvoljen znak')
        elif znak == '+':
            yield lex.token(TT.PLUS)
        elif znak == '-':
            yield lex.token(TT.MINUS)
        elif znak == '(':
            yield lex.token(TT.OTVORENA)
        elif znak == ')':
            yield lex.token(TT.ZATVORENA)
        elif znak == '*':
            yield lex.token(TT.PUTA)
        elif znak == '^':
            yield lex.token(TT.NA)
        elif znak == '/':
            yield lex.token(TT.KROZ)
        elif znak.isdigit:
            lex.zvijezda(str.isdigit)
            if(lex.pogledaj() == '.'):
                lex.čitaj()
                if(znak.isdigit):#lex.pogledaj()
                    lex.zvijezda(str.isdigit)
                else:
                    raise lex.greška('Pogresan decimalni broj')
            p = lex.sadržaj
            if p == '0' or p[0] != '0':
                if '.' not in p:
                    yield lex.token(TT.CBROJ)
                else:
                    yield lex.token(TT.DBROJ)
            else:
                raise lex.greška('Jedino je baza 10 podrzana')
        else:
            raise LeksičkaGreška('Pogrešan unoss')

'''
izraz -> član | izraz PLUS član | izraz  MINUS član
član -> član PUTA faktor | faktor | MINUS član | član KROZ faktor | član faktor
faktor -> baza | baza NA faktor
baza -> CRBOJ | DBROJ | OTVORENA izraz ZATVORENA
'''

class LVParser(Parser):
    def izraz(self):
        trenutni = self.član()
        while True:
            if self >> TT.PLUS:
                trenutni = Zbroj([trenutni, self.član()])
            elif self >> TT.MINUS:
                trenutni = Zbroj([trenutni, Suprotan(self.član())])
            else:
                break
        return trenutni

    def član(self):
        if self >> TT.MINUS:
            return Suprotan(self.član())
        trenutni = self.faktor()
        while True:
            if self >> TT.PUTA or self >= TT.OTVORENA:
                trenutni =  Umnožak([trenutni, self.faktor()])
            elif self >> TT.KROZ or self >= TT.OTVORENA:
                trenutni = Kroz([trenutni, self.faktor()])
            else:
                return trenutni

    def faktor(self):
        trenutni = self.baza()
        if self >> TT.NA:
            return Potencija([trenutni, self.faktor()])
        else:
            return trenutni

    def baza(self):
        if self >> TT.CBROJ or self >> TT.DBROJ:
            return self.zadnji
        elif self >> TT.OTVORENA:
            u_zagradi = self.izraz()
            self.pročitaj(TT.ZATVORENA)
            return u_zagradi
        else:
            self.greška()
    start = izraz

class Zbroj(AST('pribrojnici')):
    def vrijednost(self):
        a, b = self.pribrojnici
        return a.vrijednost() + b.vrijednost()

class Suprotan(AST('broj')):
    def vrijednost(self):
        return -self.broj.vrijednost()

class Potencija(AST('baza eksponent')):
    def vrijednost(self):
        return self.baza.vrijednost() ** self.eksponent.vrijednost()

class Umnožak(AST('faktori')):
    def vrijednost(self):
        a, b = self.faktori
        return a.vrijednost() * b.vrijednost()

class Kroz(AST('djelitelji')):
    def vrijednost(self):
        a, b = self.djelitelji
        return a.vrijednost() / b.vrijednost()

if __name__ == '__main__':
   # tokeni = list(l_lex(ulaz))
   # s=tokeni


   #testiranje
   ulaz = ['3+4', '3-4', '3*4', '12/7', '3(2+1)']
   for i in range(5):
       tokeni = list(l_lex(ulaz[i]))
      # print('tokeni:\n')
      # print(tokeni)
       #print('\n')
       print('parsirano + interpretirano:\n')
       lv = LVParser.parsiraj(tokeni)
       print(lv.vrijednost())
       print('\n')


   '''tokeni = list(l_lex(ulaz))
   print('tokeni:\n')
   print(tokeni)
   print('\n')
   print('parsirano + interpretirano:\n')
   lv = LVParser.parsiraj(tokeni)
   print(lv.vrijednost())
   print('\n')
'''
    


    
