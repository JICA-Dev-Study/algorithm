package study_171127;

import java.util.Scanner;

public class Problem2750 {
	
//	public static int[] sample = {66, 11, 1, -20, 5,2,3,4};
	public static int[] sample;
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		
		sample = new int[N];
		for(int i=0; i<N; i++){
			sample[i] = sc.nextInt();
		}
//		System.out.println("-----start-----");
//		print();
//		System.out.println();
		sort(0,sample.length-1);
		
		print();
	}
	
	public static void sort(int l, int r){
//		System.out.println("************** >>> l:"+l+", r:"+r);
		int left = l;
		int right = r;
		int pivot = sample[(l+r)/2];
		int cnt = 0;
		while(left < right){
//			System.out.println("left:"+left+", right:"+ right +", pivot:"+ pivot+", idx:"+(l+r)/2);
			if(sample[left] >= pivot && sample[right] <= pivot){
				swap(left, right);
			}
			if(sample[left] < pivot){
				left++;
			}
			if(sample[right] > pivot){
				right--;
			}
//			print();
			cnt++;
//			System.out.println("-------------->>"+cnt);
		}
		
		if(l<right) sort(l, left-1);
		if(r>left) sort(right+1, r);
		
		
	}
	
	public static void swap(int l, int r){
		int tmp = sample[l];
		sample[l] = sample[r];
		sample[r] = tmp;
	}
	
	public static void print(){
		for(int i=0; i<sample.length; i++){
			System.out.println(sample[i]);
		}
		System.out.println();
	}
}
