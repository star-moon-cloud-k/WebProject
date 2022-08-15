package hellojpa;

import hellojpa.domain.*;

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
            Member member = new Member();
            member.setName("member1");


            em.persist(member);

            Team team = new Team();
            team.setName("TeamA");
            member.setTeam(team);

            em.persist(team);

            em.flush();
            em.clear();
            Member memberFind = em.getReference(Member.class, member.getId());

            System.out.println("================");
            System.out.println("member " + memberFind.getName());
            System.out.println("member " + memberFind.getId());
            System.out.println("================");

//            System.out.println("team " + memberFind.getTeam());
            tx.commit();

        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
