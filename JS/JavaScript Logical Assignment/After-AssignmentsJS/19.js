function strassenMatrixMult(a, b){
    console.log('First Matrix = ',a);
    console.log('Second Matrix = ',b);
    let c = [];
    
    m1= (a[0][0] + a[1][1])*(b[0][0]+b[1][1]);
	m2= (a[1][0]+a[1][1])*b[0][0];
	m3= a[0][0]*(b[0][1]-b[1][1]);
	m4= a[1][1]*(b[1][0]-b[0][0]);
	m5= (a[0][0]+a[0][1])*b[1][1];
	m6= (a[1][0]-a[0][0])*(b[0][0]+b[0][1]);
	m7= (a[0][1]-a[1][1])*(b[1][0]+b[1][1]);

	c.push([m1+m4-m5+m7, m3+m5]);
	c.push([m2+m4, m1-m2+m3+m6]);

    console.log('Strassen Multiplication = ', c);
}

a = [[5, 6], [1, 7]];
b = [[6, 2], [8, 7]];
strassenMatrixMult(a, b);