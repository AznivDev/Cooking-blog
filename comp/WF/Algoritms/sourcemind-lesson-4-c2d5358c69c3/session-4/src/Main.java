import database.Database;
import json.JsonDatabase;
import sourcemind.Cat;

public class Main {
    public static void main(String[] args) {

        Database database = null;

        if ("xml".equals(args[0])) {
            database = new XmlDatabase();
        }
        if ("json".equals(args[0])) {
            database = new JsonDatabase();
        }
        if ("array".equals(args[0])) {
            database = new ArrayDatabase();
        }

        if (database != null) {
            Cat cat = new Cat("Tom", 1);
            database.save(cat);

            String name = args[1];
            cat = database.find(name);
            System.out.println("Found: " + cat.toString());
        }
    }
}