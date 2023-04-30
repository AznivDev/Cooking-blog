import sourcemind.Cat;
import sourcemind.Dog;
import sourcemind.Walkable;

public class Program {
    public static void main(String[] args) {
        Walkable[] allAnimalsThatCanWalk = new Walkable[] {
                new Cat("Oscar"),
                new Dog(),
                new Cat("Tom")
        };

        Walkable animal1 = new Cat("Oscar");
        animal1.walk();

        for (Walkable animal : allAnimalsThatCanWalk) {
            animal.walk();
        }
    }
}
