package sourcemind;

public class VanaCat extends Cat {

    public VanaCat(String name) {
        super(name);
    }

    public VanaCat(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("Vana Meowwww");
    }
}
