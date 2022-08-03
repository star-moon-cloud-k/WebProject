package hellojpa.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product {
    @Id
    @Column(name = "PRODUCT_ID")
    private String id;
    private String name;

    @ManyToMany(mappedBy = "products")  //역방향 추가
    private List<Member> members = new ArrayList<>();

    public List<Member> getMembers() {
        return members;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
