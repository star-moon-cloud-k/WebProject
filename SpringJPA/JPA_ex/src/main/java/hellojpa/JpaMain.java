package hellojpa;

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

            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            Member member = new Member();
            member.setName("Member1");
            member.setTeam(team);
            em.persist(member);

//            team.getMembers().add(member);
          //객체 지향적으로 값을 저장하는게 맞다.
            //연관관계의 주인이 아닌 값의 값 입력


//            em.flush();
//            em.clear();

            Team findTeam = em.find(Team.class, team.getId());  //1차 캐시

            List<Member> members = findTeam.getMembers();


            System.out.println("================");
            for (Member m : members){
                System.out.println("m = " + m.getName());
            }
            System.out.println("================");


            tx.commit();
        }catch (Exception e){
            tx.rollback();
        }finally {
            em.close();
        }
        emf.close();
    }
}
