if(!JSZip)throw"JSZip not defined";!function(){var a=32768,b=0,c=1,d=2,e=6,f=!0,g=32768,h=64,i=8192,j=2*a,k=3,l=258,m=16,n=8192,o=13;n>g&&alert("error: zip_INBUFSIZ is too small"),a<<1>1<<m&&alert("error: zip_WSIZE is too large"),o>m-1&&alert("error: zip_HASH_BITS is too large"),(8>o||258!=l)&&alert("error: Code too clever");var p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb=n,sb=1<<o,tb=sb-1,ub=a-1,vb=0,wb=4096,xb=l+k+1,yb=a-xb,zb=1,Ab=15,Bb=7,Cb=29,Db=256,Eb=256,Fb=Db+1+Cb,Gb=30,Hb=19,Ib=16,Jb=17,Kb=18,Lb=2*Fb+1,Mb=parseInt((o+k-1)/k),Nb=null,Ob=function(){this.fc=0,this.dl=0},Pb=function(){this.dyn_tree=null,this.static_tree=null,this.extra_bits=null,this.extra_base=0,this.elems=0,this.max_length=0,this.max_code=0},Qb=function(a,b,c,d){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d},Rb=function(){this.next=null,this.len=0,this.ptr=new Array(i),this.off=0},Sb=new Array(0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0),Tb=new Array(0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13),Ub=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7),Vb=new Array(16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15),Wb=new Array(new Qb(0,0,0,0),new Qb(4,4,8,4),new Qb(4,5,16,8),new Qb(4,6,32,32),new Qb(4,4,16,16),new Qb(8,16,32,32),new Qb(8,16,128,128),new Qb(8,32,128,256),new Qb(32,128,258,1024),new Qb(32,258,258,4096)),Xb=function(a){var b;if(a?1>a?a=1:a>9&&(a=9):a=e,P=a,s=!1,L=!1,null==Nb){for(p=q=r=null,Nb=new Array(i),w=new Array(j),x=new Array(rb),y=new Array(g+h),z=new Array(1<<m),S=new Array(Lb),b=0;Lb>b;b++)S[b]=new Ob;for(T=new Array(2*Gb+1),b=0;2*Gb+1>b;b++)T[b]=new Ob;for(U=new Array(Fb+2),b=0;Fb+2>b;b++)U[b]=new Ob;for(V=new Array(Gb),b=0;Gb>b;b++)V[b]=new Ob;for(W=new Array(2*Hb+1),b=0;2*Hb+1>b;b++)W[b]=new Ob;X=new Pb,Y=new Pb,Z=new Pb,$=new Array(Ab+1),_=new Array(2*Fb+1),cb=new Array(2*Fb+1),db=new Array(l-k+1),eb=new Array(512),fb=new Array(Cb),gb=new Array(Gb),hb=new Array(parseInt(n/8))}},Yb=function(a){a.next=p,p=a},Zb=function(){var a;return null!=p?(a=p,p=p.next):a=new Rb,a.next=null,a.len=a.off=0,a},$b=function(b){return z[a+b]},_b=function(b,c){return z[a+b]=c},ac=function(a){Nb[u+t++]=a,u+t==i&&Gc()},bc=function(a){a&=65535,i-2>u+t?(Nb[u+t++]=255&a,Nb[u+t++]=a>>>8):(ac(255&a),ac(a>>>8))},cc=function(){D=(D<<Mb^255&w[J+k-1])&tb,E=$b(D),z[J&ub]=E,_b(D,J)},dc=function(a,b){Dc(b[a].fc,b[a].dl)},ec=function(a){return 255&(256>a?eb[a]:eb[256+(a>>7)])},fc=function(a,b,c){return a[b].fc<a[c].fc||a[b].fc==a[c].fc&&cb[b]<=cb[c]},gc=function(a,b,c){var d;for(d=0;c>d&&qb<pb.length;d++)a[b+d]=255&pb.charCodeAt(qb++);return d},hc=function(){var b;for(b=0;sb>b;b++)z[a+b]=0;if(O=Wb[P].max_lazy,Q=Wb[P].good_length,f||(R=Wb[P].nice_length),N=Wb[P].max_chain,J=0,C=0,M=gc(w,0,2*a),0>=M)return L=!0,M=0,void 0;for(L=!1;xb>M&&!L;)jc();for(D=0,b=0;k-1>b;b++)D=(D<<Mb^255&w[b])&tb},ic=function(a){var b,c,d=N,e=J,g=I,h=J>yb?J-yb:vb,i=J+l,j=w[e+g-1],k=w[e+g];I>=Q&&(d>>=2);do if(b=a,w[b+g]==k&&w[b+g-1]==j&&w[b]==w[e]&&w[++b]==w[e+1]){e+=2,b++;do;while(w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&w[++e]==w[++b]&&i>e);if(c=l-(i-e),e=i-l,c>g){if(K=a,g=c,f){if(c>=l)break}else if(c>=R)break;j=w[e+g-1],k=w[e+g]}}while((a=z[a&ub])>h&&0!=--d);return g},jc=function(){var b,c,d=j-M-J;if(-1==d)d--;else if(J>=a+yb){for(b=0;a>b;b++)w[b]=w[b+a];for(K-=a,J-=a,C-=a,b=0;sb>b;b++)c=$b(b),_b(b,c>=a?c-a:vb);for(b=0;a>b;b++)c=z[b],z[b]=c>=a?c-a:vb;d+=a}L||(b=gc(w,J+M,d),0>=b?L=!0:M+=b)},kc=function(){for(;0!=M&&null==q;){var a;if(cc(),E!=vb&&yb>=J-E&&(H=ic(E),H>M&&(H=M)),H>=k)if(a=Ac(J-K,H-k),M-=H,O>=H){H--;do J++,cc();while(0!=--H);J++}else J+=H,H=0,D=255&w[J],D=(D<<Mb^255&w[J+1])&tb;else a=Ac(0,255&w[J]),M--,J++;for(a&&(zc(0),C=J);xb>M&&!L;)jc()}},lc=function(){for(;0!=M&&null==q;){if(cc(),I=H,F=K,H=k-1,E!=vb&&O>I&&yb>=J-E&&(H=ic(E),H>M&&(H=M),H==k&&J-K>wb&&H--),I>=k&&I>=H){var a;a=Ac(J-1-F,I-k),M-=I-1,I-=2;do J++,cc();while(0!=--I);G=0,H=k-1,J++,a&&(zc(0),C=J)}else 0!=G?(Ac(0,255&w[J-1])&&(zc(0),C=J),J++,M--):(G=1,J++,M--);for(;xb>M&&!L;)jc()}},mc=function(){L||(A=0,B=0,pc(),hc(),q=null,t=0,u=0,3>=P?(I=k-1,H=0):(H=k-1,G=0),v=!1)},nc=function(a,b,c){var d;return s||(mc(),s=!0,0!=M)?(d=oc(a,b,c))==c?c:v?d:(3>=P?kc():lc(),0==M&&(0!=G&&Ac(0,255&w[J-1]),zc(1),v=!0),d+oc(a,d+b,c-d)):(v=!0,0)},oc=function(a,b,c){var d,e,f;for(d=0;null!=q&&c>d;){for(e=c-d,e>q.len&&(e=q.len),f=0;e>f;f++)a[b+d+f]=q.ptr[q.off+f];if(q.off+=e,q.len-=e,d+=e,0==q.len){var g;g=q,q=q.next,Yb(g)}}if(d==c)return d;if(t>u){for(e=c-d,e>t-u&&(e=t-u),f=0;e>f;f++)a[b+d+f]=Nb[u+f];u+=e,d+=e,t==u&&(t=u=0)}return d},pc=function(){var a,b,c,d,e;if(0==V[0].dl){for(X.dyn_tree=S,X.static_tree=U,X.extra_bits=Sb,X.extra_base=Db+1,X.elems=Fb,X.max_length=Ab,X.max_code=0,Y.dyn_tree=T,Y.static_tree=V,Y.extra_bits=Tb,Y.extra_base=0,Y.elems=Gb,Y.max_length=Ab,Y.max_code=0,Z.dyn_tree=W,Z.static_tree=null,Z.extra_bits=Ub,Z.extra_base=0,Z.elems=Hb,Z.max_length=Bb,Z.max_code=0,c=0,d=0;Cb-1>d;d++)for(fb[d]=c,a=0;a<1<<Sb[d];a++)db[c++]=d;for(db[c-1]=d,e=0,d=0;16>d;d++)for(gb[d]=e,a=0;a<1<<Tb[d];a++)eb[e++]=d;for(e>>=7;Gb>d;d++)for(gb[d]=e<<7,a=0;a<1<<Tb[d]-7;a++)eb[256+e++]=d;for(b=0;Ab>=b;b++)$[b]=0;for(a=0;143>=a;)U[a++].dl=8,$[8]++;for(;255>=a;)U[a++].dl=9,$[9]++;for(;279>=a;)U[a++].dl=7,$[7]++;for(;287>=a;)U[a++].dl=8,$[8]++;for(tc(U,Fb+1),a=0;Gb>a;a++)V[a].dl=5,V[a].fc=Ec(a,5);qc()}},qc=function(){var a;for(a=0;Fb>a;a++)S[a].fc=0;for(a=0;Gb>a;a++)T[a].fc=0;for(a=0;Hb>a;a++)W[a].fc=0;S[Eb].fc=1,nb=ob=0,ib=jb=kb=0,lb=0,mb=1},rc=function(a,b){for(var c=_[b],d=b<<1;ab>=d&&(ab>d&&fc(a,_[d+1],_[d])&&d++,!fc(a,c,_[d]));)_[b]=_[d],b=d,d<<=1;_[b]=c},sc=function(a){var b,c,d,e,f,g,h=a.dyn_tree,i=a.extra_bits,j=a.extra_base,k=a.max_code,l=a.max_length,m=a.static_tree,n=0;for(e=0;Ab>=e;e++)$[e]=0;for(h[_[bb]].dl=0,b=bb+1;Lb>b;b++)c=_[b],e=h[h[c].dl].dl+1,e>l&&(e=l,n++),h[c].dl=e,c>k||($[e]++,f=0,c>=j&&(f=i[c-j]),g=h[c].fc,nb+=g*(e+f),null!=m&&(ob+=g*(m[c].dl+f)));if(0!=n){do{for(e=l-1;0==$[e];)e--;$[e]--,$[e+1]+=2,$[l]--,n-=2}while(n>0);for(e=l;0!=e;e--)for(c=$[e];0!=c;)d=_[--b],d>k||(h[d].dl!=e&&(nb+=(e-h[d].dl)*h[d].fc,h[d].fc=e),c--)}},tc=function(a,b){var c,d,e=new Array(Ab+1),f=0;for(c=1;Ab>=c;c++)f=f+$[c-1]<<1,e[c]=f;for(d=0;b>=d;d++){var g=a[d].dl;0!=g&&(a[d].fc=Ec(e[g]++,g))}},uc=function(a){var b,c,d=a.dyn_tree,e=a.static_tree,f=a.elems,g=-1,h=f;for(ab=0,bb=Lb,b=0;f>b;b++)0!=d[b].fc?(_[++ab]=g=b,cb[b]=0):d[b].dl=0;for(;2>ab;){var i=_[++ab]=2>g?++g:0;d[i].fc=1,cb[i]=0,nb--,null!=e&&(ob-=e[i].dl)}for(a.max_code=g,b=ab>>1;b>=1;b--)rc(d,b);do b=_[zb],_[zb]=_[ab--],rc(d,zb),c=_[zb],_[--bb]=b,_[--bb]=c,d[h].fc=d[b].fc+d[c].fc,cb[h]=cb[b]>cb[c]+1?cb[b]:cb[c]+1,d[b].dl=d[c].dl=h,_[zb]=h++,rc(d,zb);while(ab>=2);_[--bb]=_[zb],sc(a),tc(d,g)},vc=function(a,b){var c,d,e=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),a[b+1].dl=65535,c=0;b>=c;c++)d=f,f=a[c+1].dl,++g<h&&d==f||(i>g?W[d].fc+=g:0!=d?(d!=e&&W[d].fc++,W[Ib].fc++):10>=g?W[Jb].fc++:W[Kb].fc++,g=0,e=d,0==f?(h=138,i=3):d==f?(h=6,i=3):(h=7,i=4))},wc=function(a,b){var c,d,e=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),c=0;b>=c;c++)if(d=f,f=a[c+1].dl,!(++g<h&&d==f)){if(i>g){do dc(d,W);while(0!=--g)}else 0!=d?(d!=e&&(dc(d,W),g--),dc(Ib,W),Dc(g-3,2)):10>=g?(dc(Jb,W),Dc(g-3,3)):(dc(Kb,W),Dc(g-11,7));g=0,e=d,0==f?(h=138,i=3):d==f?(h=6,i=3):(h=7,i=4)}},xc=function(){var a;for(vc(S,X.max_code),vc(T,Y.max_code),uc(Z),a=Hb-1;a>=3&&0==W[Vb[a]].dl;a--);return nb+=3*(a+1)+5+5+4,a},yc=function(a,b,c){var d;for(Dc(a-257,5),Dc(b-1,5),Dc(c-4,4),d=0;c>d;d++)Dc(W[Vb[d]].dl,3);wc(S,a-1),wc(T,b-1)},zc=function(a){var e,f,g,h;if(h=J-C,hb[kb]=lb,uc(X),uc(Y),g=xc(),e=nb+3+7>>3,f=ob+3+7>>3,e>=f&&(e=f),e>=h+4&&C>=0){var i;for(Dc((b<<1)+a,3),Fc(),bc(h),bc(~h),i=0;h>i;i++)ac(w[C+i])}else f==e?(Dc((c<<1)+a,3),Bc(U,V)):(Dc((d<<1)+a,3),yc(X.max_code+1,Y.max_code+1,g+1),Bc(S,T));qc(),0!=a&&Fc()},Ac=function(a,b){if(y[ib++]=b,0==a?S[b].fc++:(a--,S[db[b]+Db+1].fc++,T[ec(a)].fc++,x[jb++]=a,lb|=mb),mb<<=1,0==(7&ib)&&(hb[kb++]=lb,lb=0,mb=1),P>2&&0==(4095&ib)){var c,d=8*ib,e=J-C;for(c=0;Gb>c;c++)d+=T[c].fc*(5+Tb[c]);if(d>>=3,jb<parseInt(ib/2)&&d<parseInt(e/2))return!0}return ib==n-1||jb==rb},Bc=function(a,b){var c,d,e,f,g=0,h=0,i=0,j=0;if(0!=ib)do 0==(7&g)&&(j=hb[i++]),d=255&y[g++],0==(1&j)?dc(d,a):(e=db[d],dc(e+Db+1,a),f=Sb[e],0!=f&&(d-=fb[e],Dc(d,f)),c=x[h++],e=ec(c),dc(e,b),f=Tb[e],0!=f&&(c-=gb[e],Dc(c,f))),j>>=1;while(ib>g);dc(Eb,a)},Cc=16,Dc=function(a,b){B>Cc-b?(A|=a<<B,bc(A),A=a>>Cc-B,B+=b-Cc):(A|=a<<B,B+=b)},Ec=function(a,b){var c=0;do c|=1&a,a>>=1,c<<=1;while(--b>0);return c>>1},Fc=function(){B>8?bc(A):B>0&&ac(A),A=0,B=0},Gc=function(){if(0!=t){var a,b;for(a=Zb(),null==q?q=r=a:r=r.next=a,a.len=t-u,b=0;b<a.len;b++)a.ptr[b]=Nb[u+b];t=u=0}},Hc=function(a,b){var c,d;pb=a,qb=0,"undefined"==typeof b&&(b=e),Xb(b);for(var f=new Array(1024),g=[];(c=nc(f,0,f.length))>0;){var h=new Array(c);for(d=0;c>d;d++)h[d]=String.fromCharCode(f[d]);g[g.length]=h.join("")}return pb=null,g.join("")};JSZip.compressions.DEFLATE?JSZip.compressions.DEFLATE.compress=Hc:JSZip.compressions.DEFLATE={magic:"\b\0",compress:Hc}}();