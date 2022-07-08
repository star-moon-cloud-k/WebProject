package Hello.SpringMVC;

import Hello.SpringMVC.repository.MemberRepository;
import Hello.SpringMVC.repository.MemoryMemberRepository;
import Hello.SpringMVC.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository(){
        return new MemoryMemberRepository();
    }
}
