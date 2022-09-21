package com.spring.bearbom.service.mypage.impl;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.spring.bearbom.mapper.UserMapper;


import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.mypage.MypageService;


@Service
public class MypageServiceImpl implements MypageService {
	
	@Autowired
	private UserMapper userMapper;


	@Autowired
	private UserRepository userRepository;
  
	@Autowired
	private MypageMapper mypageMapper;

	
	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);
		
		return userRepository.findByUserId(userId);
	}



	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		userMapper.updateUser(user);
	}
	
	// 유저 정보 수정
	// mapper로 바꿀 것
//	 @Override
//	public void updateUser(User user) {
//		 return updateUser;
////		userRepository.save(user);
//	}


    @Override
    public List<Map<String, Object>> getInquiryReference(String userId) {
        return mypageMapper.getInquiryReference(userId);
    }


//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }
    
    
	//재현
    
	@Override
	public List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getInquiryReference(inquiryDTO);
	}


	@Override
	public void updateInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		mypageMapper.updateInquiryReference(inquiryDTO);
	}
    
    
    

}

