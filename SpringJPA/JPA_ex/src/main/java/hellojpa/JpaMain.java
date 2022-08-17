package hellojpa;

import hellojpa.domain.*;
import org.hibernate.Hibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        //일관적이 작업을 진행할 때 마다 EntityManager 를 만들어야함
        EntityManager em = emf.createEntityManager();
        //code 작성
        //transaction 시작
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        try {

            Address address1 = new Address("city", "street", "10000");
            Address address2 = new Address("city", "street", "10000");
            System.out.println("address1 == address2 : " + (address1 == address2));
            System.out.println("address1 equals address2 : " + (address1.equals(address2)));
            tx.commit();

        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
