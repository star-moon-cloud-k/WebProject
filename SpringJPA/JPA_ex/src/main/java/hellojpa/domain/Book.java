package hellojpa.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "BOOK_ID") //ID재정의
@DiscriminatorValue("book")
public class Book extends Item{
    private String author;  //작가
    private String isbn;    //ISBN

    public String getAuthor() {

        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
}
