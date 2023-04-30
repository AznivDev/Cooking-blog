package json;

import database.Database;
import sourcemind.Cat;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class JsonDatabase implements Database {

    List<Cat> catDb = new ArrayList<>();
    @Override
    public Cat find(String name) {
        List<Cat> newCat = catDb.stream()
                .filter(currentCat -> currentCat.getName().equals(name)).toList();
        return newCat.get(0);
    }

    @Override
    public void save(Cat cat) {
        catDb.add(cat);
        System.out.println("Your cat is saved in our DB.");

    }
}
