package hellojpa;

import hellojpa.domain.Locker;
import hellojpa.domain.Member;
import hellojpa.domain.Product;
import hellojpa.domain.Team;

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
        try{
            Product product = em.find(Product.class, "productA");
            List<Member> members = product.getMembers();
              //객체 그래프 탐색
            for (Member member : members) {
                System.out.println("member.name = " + member.getName());
            }

        }catch (Exception e){
            tx.rollback();
        }finally {
            em.close();
        }
        emf.close();
    }
}
