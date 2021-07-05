#Sample python method with arguments
import sys
 
def add(arg1,arg2):

    arg1=int(arg1)+int(arg2)
    s=arg1
    print(arg1)
    return arg1



arg1 = sys.argv[1]
arg2 = sys.argv[2]


add(arg1,arg2)