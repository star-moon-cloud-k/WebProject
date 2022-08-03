package hellojpa.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@DiscriminatorValue("B")
@PrimaryKeyJoinColumn(name = "BOOK_ID") //ID재정의
public class Book extends Item{
    private String author;  //작가
    private String isbn;    //ISBN
}
