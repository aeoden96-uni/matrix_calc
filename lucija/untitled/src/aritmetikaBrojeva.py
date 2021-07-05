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
gramatika
'''
'''
class LVParser(Parser):
    def izraz(self):
        prvi = self.clan()
        if self >> TT.PLUS:
            drugi = self.izraz()
            return Zbroj([prvi, drugi])
        else:
            return prvi


class Zbroj(AST('pribrojnici')):
    def vrijednost(self):
        a, b = self.pribrojnici
        return a.vrijednost() + b.vrijednost()

'''


if __name__ == '__main__':
    tokeni = list(l_lex(ulaz))
    s=tokeni

