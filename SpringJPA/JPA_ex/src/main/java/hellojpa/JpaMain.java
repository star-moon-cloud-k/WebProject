package hellojpa;

import hellojpa.domain.Locker;
import hellojpa.domain.Member;
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
            Member member = new Member();
            member.setName("member1");
            em.persist(member);

            Locker locker = new Locker();
            locker.setMember(member);
            locker.setName(member.getName());

            em.persist(locker);

            member.setLocker(locker);

            Team team = new Team();
            team.setName("TeamA");

            team.getMembers().add(member);
            em.persist(team);

            tx.commit();
        }catch (Exception e){
            tx.rollback();
        }finally {
            em.close();
        }
        emf.close();
    }
}
