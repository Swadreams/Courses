package Calc;

public class MathEquation {
    public  double leftVal;
    public  double rightVal;
    public  char opCode;
    public  double result;


    public  double getLeftVal() {
        return leftVal;
    }

    public void setLeftVal(double leftVal) {
        this.leftVal = leftVal;
    }

    public  double getRightVal() {
        return rightVal;
    }

    public void setRightVal(double rightVal) {
        this.rightVal = rightVal;
    }

    public char getOpCode() {
        return  opCode;
    }

    public void  setOpCode(char opCode) {
        this.opCode = opCode;
    }

    public double getResult() {
        return result;
    }

    public  void  execute() {
        switch (opCode) {
            case 'a' :
                result = leftVal + rightVal;
                break;
            case 's' :
                result = leftVal - rightVal;
                break;
            case 'm' :
                result = leftVal * rightVal;
                break;
            case 'd' :
                result = rightVal != 0.0d ? leftVal / rightVal : 0;
                break;
            default:{
                System.out.println("Invalid opcoode.");
                result = 0.0d;
                break;
            }
        }
    }
}
