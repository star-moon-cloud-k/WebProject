package Hello.SpringMVC.controller;

import Hello.SpringMVC.repository.MemberRepository;
import Hello.SpringMVC.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MemberController {
    private final MemberService memberService;


    public MemberController(MemberService memberService){
        this.memberService  = memberService;
    }
}
