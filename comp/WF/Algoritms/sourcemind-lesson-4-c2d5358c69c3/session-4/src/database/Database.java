package database;

import sourcemind.Cat;

public interface Database {
    Cat find(String name);
    void save(Cat cat);
}
