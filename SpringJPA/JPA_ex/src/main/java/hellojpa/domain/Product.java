package hellojpa.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product extends BaseEntity{

    private String name;




    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
