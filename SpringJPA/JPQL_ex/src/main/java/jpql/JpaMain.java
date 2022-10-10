package jpql;

import jpql.domain.Member;
import jpql.domain.MemberDTO;

import javax.persistence.*;
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
            member.setUsername("member1");
            member.setAge(10);
            em.persist(member);


             Member result = em.createQuery("select m from  Member m where m.username = :username", Member.class)
            .setParameter("username", "member1")
            .getSingleResult();
            System.out.println("singleResult = " + result.getUsername());
            result.setAge(20);
            tx.commit();

            List<MemberDTO> result2 =  em.createQuery("select new jpql.domain.MemberDTO(m.username,m.age) from Member m" , MemberDTO.class)
                    .getResultList();

            MemberDTO memberDTO = result2.get(0);
            System.out.println("memberDTO = " + memberDTO.getUsername());
            System.out.println("memberDTO = " + memberDTO.getAge());
            tx.commit();

        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
