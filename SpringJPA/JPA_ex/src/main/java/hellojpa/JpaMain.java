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
            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            Member member = new Member();
            member.setName("member1");
            member.setTeam(team);
            em.persist(member);


            em.flush();
            em.clear();
            System.out.println("======= 저 장 =======");
            Member memberFind = em.getReference(Member.class, member.getId());
            System.out.println("========getReference========");
            Hibernate.initialize(memberFind);
            System.out.println("================");
            Member m1 = em.find(Member.class, member.getId());
            System.out.println("m1 = " + m1.getClass());


            System.out.println("================");
            System.out.println("member " + memberFind.getName());
            System.out.println("member " + memberFind.getTeam().getName());
            System.out.println("================");

            System.out.println("reference = " + memberFind.getClass());
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
