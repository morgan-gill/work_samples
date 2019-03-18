/*********************************************************************************
* Project: < PEER_CONNECT >
* Assignment: < Assignment 1 >
* Author(s): < Jerome Ching, Morgan Gill, Ankur Aggarwal>
* Student Number: < 100530184, 100566959, 101095272 >
* Date: < October 27th, 2018 >
* */
package utils;

public class TimerThread implements Runnable{

	@Override
	public void run() {
		try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
	}

}
