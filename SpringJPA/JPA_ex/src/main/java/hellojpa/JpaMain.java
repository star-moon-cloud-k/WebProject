package hellojpa;

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
        try{Member member = new Member();
//            member.setId(2L);
//            member.setName("HelloB");

            Member findMember = em.find(Member.class, 1L);
            findMember.setName("HelloJPA");

            List<Member> result = em.createQuery("select m from Member as m", Member.class).getResultList();

//            em.persist(member);
            tx.commit();
        }catch (Exception e){
            tx.rollback();
        }finally {
            em.close();
        }
        emf.close();
    }
}
