package sourcemind;

public class Cat extends Animal implements Walkable {

    private static int numberOfCats = 0;
    public static Cat whoIsTheBossHere = null;

    public static String describe() {
        return "https://en.wikipedia.org/wiki/Cat";
    }

    public Cat(String name) {
        this(name, 1);
    }

    public Cat(String name, int age) {
//        if (numberOfCats == 2) {
//            System.err.println("Not enough room");
//            System.exit(1);
//        }

        this.name = name;
        this.age = age;
        numberOfCats++;
        whoIsTheBossHere = this;
    }

    // Fields - in order to contain data
    private String name;
    private char gender;
    private int age;
    private double weight;
    private String color;

    // Methods
    public void breathe() {

    }

    public String getName() {
        System.out.println("Someone is asking my name");
        return name;
    }

    @Override
    public void walk() {
        System.out.println("Cat's walking");
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("Meowwww");
    }

    public Integer getAge() {
        return age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cat)) {
            return false;
        }

//        if (!(o.getClass().equals(Cat.class))) {
//            return false;
//        }

        Cat that = (Cat) o;
        return this.name.equals(that.name);
    }

    @Override
    public int hashCode() {
        return this.name.length();
    }

    @Override
    public void move() {
        System.out.println("The cat " + name  + " is walking");
    }

    @Override
    protected void moveTo(int x, int y) {
        super.moveTo(x, y);
    }

}