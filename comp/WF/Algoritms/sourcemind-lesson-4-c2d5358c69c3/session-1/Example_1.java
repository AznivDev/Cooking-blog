public class Example_1 {
    public static void main(String[] args) {
        if (Integer.parseInt(args[0]) == 1) {
            Example_1.test();
        } else {
            Example_2.test();
        }
    }

    public static void test() {
        System.out.println("Running Example_1");
    }
}

class Example_2 {
    public static void test() {
        System.out.println("Running Example_2");
    }
}