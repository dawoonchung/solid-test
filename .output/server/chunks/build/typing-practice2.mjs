import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import m from 'classnames';
import { _ as _e$1, L as L$1, f as fe$1, o as oe$1, d as de$1, m as me$1, a as _$1, u as ue$1 } from './project.module-B5Zg89BM.mjs';
import { A as A$1 } from './cards-B9luA8aH.mjs';
import { v as v$1 } from './gallery-SmyiBVw3.mjs';
import { P as P$1, b } from './title-C2BBBZUd.mjs';

const _ = "/_build/assets/application-lg-D9uffI9e.jpg", v = "/_build/assets/application-lg-CLenPyn9.webp", x = "/_build/assets/application-md-lVqClql0.jpg", $ = "/_build/assets/application-md-E16VRpgK.webp", j = "/_build/assets/application-sm-_8-nqhjZ.jpg", S = "/_build/assets/application-sm-hl_275qo.webp", W = "/_build/assets/application-xl-C5OpLb5y.jpg", C = "/_build/assets/application-xl-CoRXc5Ky.webp", k = "/_build/assets/application-xs-UedUOX6M.jpg", P = "/_build/assets/application-xs-CONWNNlm.webp", B = "/_build/assets/application-B6uFBdlr.jpg", T = "/_build/assets/application-ClePgXgC.webp", I = { xs: k, sm: j, md: x, lg: _, xl: W, default: B }, X = { xs: P, sm: S, md: $, lg: v, xl: C, default: T }, D = { jpg: I, webp: X }, M = "/_build/assets/level-complete-lg-y3VU1t_D.jpg", R = "/_build/assets/level-complete-lg-zZgWC3Ui.webp", L = "/_build/assets/level-complete-md-DXOjhV5q.jpg", K = "/_build/assets/level-complete-md-DzRzmBPv.webp", A = "/_build/assets/level-complete-sm-hNdhe6GR.jpg", E = "/_build/assets/level-complete-sm-DIDXds1s.webp", q = "/_build/assets/level-complete-xl-CUAi-avF.jpg", O = "/_build/assets/level-complete-xl-qfN-k-mQ.webp", N = "/_build/assets/level-complete-xs-C_hRPIBa.jpg", H = "/_build/assets/level-complete-xs-DjwIV2Sx.webp", F = "/_build/assets/level-complete-D4OI11qp.jpg", G = "/_build/assets/level-complete-CcXO7qzq.webp", U = { xs: N, sm: A, md: L, lg: M, xl: q, default: F }, Q = { xs: H, sm: E, md: K, lg: R, xl: O, default: G }, Z = { jpg: U, webp: Q }, z = "/_build/assets/level-selection-lg-HFZQZJMO.jpg", J = "/_build/assets/level-selection-lg-fH1t1CWM.webp", V = "/_build/assets/level-selection-md-iXSFGzo1.jpg", Y = "/_build/assets/level-selection-md-D5WgI0b9.webp", ee = "/_build/assets/level-selection-sm-CXMVJjPO.jpg", te = "/_build/assets/level-selection-sm-8ziGeEDZ.webp", se = "/_build/assets/level-selection-xl-CRWCS1bh.jpg", ae = "/_build/assets/level-selection-xl-DEIcOIZK.webp", ne = "/_build/assets/level-selection-xs-DNDMCUy_.jpg", oe = "/_build/assets/level-selection-xs-BezCRtwX.webp", ie = "/_build/assets/level-selection-CIIJyv6F.jpg", le = "/_build/assets/level-selection-B-fcnqEG.webp", re = { xs: ne, sm: ee, md: V, lg: z, xl: se, default: ie }, pe = { xs: oe, sm: te, md: Y, lg: J, xl: ae, default: le }, ce = { jpg: re, webp: pe }, de = "/_build/assets/long-paragraph-screen-lg-qeiYCezB.jpg", ge = "/_build/assets/long-paragraph-screen-lg-pZGItH4u.webp", ue = "/_build/assets/long-paragraph-screen-md-BUJlJgb6.jpg", he = "/_build/assets/long-paragraph-screen-md-CHDuNopj.webp", be = "/_build/assets/long-paragraph-screen-sm-B6Pvmi_W.jpg", me = "/_build/assets/long-paragraph-screen-sm-Cf7UWHDj.webp", we = "/_build/assets/long-paragraph-screen-xl-DO5IMn4o.jpg", ye = "/_build/assets/long-paragraph-screen-xl-yo-o-1qH.webp", fe = "/_build/assets/long-paragraph-screen-xs-DwnQ0lyc.jpg", _e = "/_build/assets/long-paragraph-screen-xs-DXmFW4zW.webp", ve = "/_build/assets/long-paragraph-screen-CqlE7i29.jpg", xe = "/_build/assets/long-paragraph-screen-QTTPXuva.webp", $e = { xs: fe, sm: be, md: ue, lg: de, xl: we, default: ve }, je = { xs: _e, sm: me, md: he, lg: ge, xl: ye, default: xe }, Se = { jpg: $e, webp: je }, We = "/_build/assets/long-paragraph-selection-lg-dmqJpSGl.jpg", Ce = "/_build/assets/long-paragraph-selection-lg-BXtU-1dy.webp", ke = "/_build/assets/long-paragraph-selection-md-BAaZSn8j.jpg", Pe = "/_build/assets/long-paragraph-selection-md-D5Tumc6Q.webp", Be = "/_build/assets/long-paragraph-selection-sm-Dcb6Ykf4.jpg", Te = "/_build/assets/long-paragraph-selection-sm-D35LzlKq.webp", Ie = "/_build/assets/long-paragraph-selection-xl-DVEq2u7s.jpg", Xe = "/_build/assets/long-paragraph-selection-xl-BBN4Gk6K.webp", De = "/_build/assets/long-paragraph-selection-xs-CUaZotNk.jpg", Me = "/_build/assets/long-paragraph-selection-xs-B-mwksX_.webp", Re = "/_build/assets/long-paragraph-selection-Eb8Ppr-U.jpg", Le = "/_build/assets/long-paragraph-selection-BTvkzZgw.webp", Ke = { xs: De, sm: Be, md: ke, lg: We, xl: Ie, default: Re }, Ae = { xs: Me, sm: Te, md: Pe, lg: Ce, xl: Xe, default: Le }, Ee = { jpg: Ke, webp: Ae }, qe = "/_build/assets/practice-screen-lg-D4diQkIF.jpg", Oe = "/_build/assets/practice-screen-lg-LFbdHTMu.webp", Ne = "/_build/assets/practice-screen-md-TceQG0Fy.jpg", He = "/_build/assets/practice-screen-md-B_t-WLnp.webp", Fe = "/_build/assets/practice-screen-sm-CjQo_8Xi.jpg", Ge = "/_build/assets/practice-screen-sm-Dzh75bsh.webp", Ue = "/_build/assets/practice-screen-xl-DHT8Epy_.jpg", Qe = "/_build/assets/practice-screen-xl-BW1AUMu9.webp", Ze = "/_build/assets/practice-screen-xs-BGd77xoV.jpg", ze = "/_build/assets/practice-screen-xs-X6Xmeq-A.webp", Je = "/_build/assets/practice-screen-BiEZdQUT.jpg", Ve = "/_build/assets/practice-screen-qw_-8rTv.webp", Ye = { xs: Ze, sm: Fe, md: Ne, lg: qe, xl: Ue, default: Je }, et = { xs: ze, sm: Ge, md: He, lg: Oe, xl: Qe, default: Ve }, tt = { jpg: Ye, webp: et }, st = "/_build/assets/short-sentence-lg-BwQ0EePs.jpg", at = "/_build/assets/short-sentence-lg-DoxuykwT.webp", nt = "/_build/assets/short-sentence-md-ClJpNtkb.jpg", ot = "/_build/assets/short-sentence-md-wkYVllpn.webp", it = "/_build/assets/short-sentence-sm-COfJdsW4.jpg", lt = "/_build/assets/short-sentence-sm-DNZ2uAtI.webp", rt = "/_build/assets/short-sentence-xl-KMHsFMs_.jpg", pt = "/_build/assets/short-sentence-xl-D45W1tDf.webp", ct = "/_build/assets/short-sentence-xs-CErsTwCG.jpg", dt = "/_build/assets/short-sentence-xs-DdGV8sZQ.webp", gt = "/_build/assets/short-sentence-CpoHYIcc.jpg", ut = "/_build/assets/short-sentence-Cqiq0DE6.webp", ht = { xs: ct, sm: it, md: nt, lg: st, xl: rt, default: gt }, bt = { xs: dt, sm: lt, md: ot, lg: at, xl: pt, default: ut }, mt = { jpg: ht, webp: bt }, wt = "/_build/assets/special-keys-lg-DsQNPJ8y.jpg", yt = "/_build/assets/special-keys-lg-DNm6dFdU.webp", ft = "/_build/assets/special-keys-md-CWEAat8w.jpg", _t = "/_build/assets/special-keys-md-6eXLAezB.webp", vt = "/_build/assets/special-keys-sm-D1Sc9LZr.jpg", xt = "/_build/assets/special-keys-sm-xx29mC6I.webp", $t = "/_build/assets/special-keys-xl-Cl_SUM1x.jpg", jt = "/_build/assets/special-keys-xl-CV7GW8fJ.webp", St = "/_build/assets/special-keys-xs-u2T-DyxR.jpg", Wt = "/_build/assets/special-keys-xs-C3H189no.webp", Ct = "/_build/assets/special-keys-BkY5qoXM.jpg", kt = "/_build/assets/special-keys-6dPoKE0h.webp", Pt = { xs: St, sm: vt, md: ft, lg: wt, xl: $t, default: Ct }, Bt = { xs: Wt, sm: xt, md: _t, lg: yt, xl: jt, default: kt }, Tt = { jpg: Pt, webp: Bt }, It = "/_build/assets/teaching-in-rwanda-lg-CFeDcweR.jpg", Xt = "/_build/assets/teaching-in-rwanda-lg-Dic0BBYS.webp", Dt = "/_build/assets/teaching-in-rwanda-md-ikK68Waw.jpg", Mt = "/_build/assets/teaching-in-rwanda-md-DUtusymv.webp", Rt = "/_build/assets/teaching-in-rwanda-sm-B1CaINQ-.jpg", Lt = "/_build/assets/teaching-in-rwanda-sm-BQYMQuCK.webp", Kt = "/_build/assets/teaching-in-rwanda-xl-nitpwkvy.jpg", At = "/_build/assets/teaching-in-rwanda-xl-CY8UhGfE.webp", Et = "/_build/assets/teaching-in-rwanda-xs-CjFlmwEy.jpg", qt = "/_build/assets/teaching-in-rwanda-xs-fbFBJ9Qz.webp", Ot = "/_build/assets/teaching-in-rwanda-B8mDTQ3P.jpg", Nt = "/_build/assets/teaching-in-rwanda-DVkAE4F0.webp", Ht = { xs: Et, sm: Rt, md: Dt, lg: It, xl: Kt, default: Ot }, Ft = { xs: qt, sm: Lt, md: Mt, lg: Xt, xl: At, default: Nt }, Gt = { jpg: Ht, webp: Ft }, Ut = "/_build/assets/teaching-method-lg-NZ3VzdNM.jpg", Qt = "/_build/assets/teaching-method-lg-DwRrp1TO.webp", Zt = "/_build/assets/teaching-method-md-DcHingk6.jpg", zt = "/_build/assets/teaching-method-md-eqWaLXf_.webp", Jt = "/_build/assets/teaching-method-sm-D5wc1H_D.jpg", Vt = "/_build/assets/teaching-method-sm-B7QGNNXJ.webp", Yt = "/_build/assets/teaching-method-xl-BZLGvbw-.jpg", es = "/_build/assets/teaching-method-xl-KNXfFQfa.webp", ts = "/_build/assets/teaching-method-xs-B4Huh4GA.jpg", ss = "/_build/assets/teaching-method-xs-DccZTutq.webp", as = "/_build/assets/teaching-method-rne_iSDC.jpg", ns = "/_build/assets/teaching-method-2-biUbR8.webp", os = { xs: ts, sm: Jt, md: Zt, lg: Ut, xl: Yt, default: as }, is = { xs: ss, sm: Vt, md: zt, lg: Qt, xl: es, default: ns }, ls = { jpg: os, webp: is }, rs = "/_build/assets/typing-demonstration-lg-ATW2jT1Z.jpg", ps = "/_build/assets/typing-demonstration-lg-B9vEHtp_.webp", cs = "/_build/assets/typing-demonstration-md-DIwPTprl.jpg", ds = "/_build/assets/typing-demonstration-md-GSaEMNj3.webp", gs = "/_build/assets/typing-demonstration-sm-Bek1B1TK.jpg", us = "/_build/assets/typing-demonstration-sm-BFG9oHI8.webp", hs = "/_build/assets/typing-demonstration-xl-C8yy2ROK.jpg", bs = "/_build/assets/typing-demonstration-xl-BEGvtQ1T.webp", ms = "/_build/assets/typing-demonstration-xs-Cp7hcx6R.jpg", ws = "/_build/assets/typing-demonstration-xs-DNSrdvEg.webp", ys = "/_build/assets/typing-demonstration-HFHyrP03.jpg", fs = "/_build/assets/typing-demonstration-DkdwW7R_.webp", _s = { xs: ms, sm: gs, md: cs, lg: rs, xl: hs, default: ys }, vs = { xs: ws, sm: us, md: ds, lg: ps, xl: bs, default: fs }, xs = { jpg: _s, webp: vs }, $s = "/_build/assets/typing-practice-bg-lg-DRq2XJwN.jpg", js = "/_build/assets/typing-practice-bg-lg-4n0vKCCI.webp", Ss = "/_build/assets/typing-practice-bg-md-CJktyRYQ.jpg", Ws = "/_build/assets/typing-practice-bg-md-CynGGBMz.webp", Cs = "/_build/assets/typing-practice-bg-portrait-1x-CZwee91p.jpg", ks = "/_build/assets/typing-practice-bg-portrait-1x-O4AgzaI0.webp", Ps = "/_build/assets/typing-practice-bg-portrait-2x-BkxUEJSy.jpg", Bs = "/_build/assets/typing-practice-bg-portrait-2x-D0x5N3KQ.webp", Ts = "/_build/assets/typing-practice-bg-portrait-3x-CYaTgCxk.jpg", Is = "/_build/assets/typing-practice-bg-portrait-3x-CVk6Zzhv.webp", Xs = "/_build/assets/typing-practice-bg-sm-CzOSnVKY.jpg", Ds = "/_build/assets/typing-practice-bg-sm-CdTG1LzP.webp", Ms = "/_build/assets/typing-practice-bg-xl-B_nbHeoR.jpg", Rs = "/_build/assets/typing-practice-bg-xl-CAmlm8Zs.webp", Ls = "/_build/assets/typing-practice-bg-xs-4KBlafXt.jpg", Ks = "/_build/assets/typing-practice-bg-xs-Tnon3rvS.webp", As = "/_build/assets/typing-practice-bg-BM8CBOax.jpg", Es = "/_build/assets/typing-practice-bg-CmHpZCDw.webp", qs = { xs: Ls, sm: Xs, md: Ss, lg: $s, xl: Ms, portrait1x: Cs, portrait2x: Ps, portrait3x: Ts, default: As }, Os = { xs: Ks, sm: Ds, md: Ws, lg: js, xl: Rs, portrait1x: ks, portrait2x: Bs, portrait3x: Is, default: Es }, u = { jpg: qs, webp: Os }, Ns = "/_build/assets/user-test-lg-OHhmWSc9.jpg", Hs = "/_build/assets/user-test-lg-CfbfvdNK.webp", Fs = "/_build/assets/user-test-md-CorLRY2n.jpg", Gs = "/_build/assets/user-test-md-CgPZXP1N.webp", Us = "/_build/assets/user-test-sm-BuNpsXOY.jpg", Qs = "/_build/assets/user-test-sm-BpbdMEjS.webp", Zs = "/_build/assets/user-test-xl-DIfbX9fV.jpg", zs = "/_build/assets/user-test-xl-BQRyhKFQ.webp", Js = "/_build/assets/user-test-xs-DhpW7FI2.jpg", Vs = "/_build/assets/user-test-xs-B7ZdFrij.webp", Ys = "/_build/assets/user-test-B0QWPZD5.jpg", ea = "/_build/assets/user-test-CLZhRh3S.webp", ta = { xs: Js, sm: Us, md: Fs, lg: Ns, xl: Zs, default: Ys }, sa = { xs: Vs, sm: Qs, md: Gs, lg: Hs, xl: zs, default: ea }, aa = { jpg: ta, webp: sa };
var na = ["<header", "><div", "><!--$-->", "<!--/--><div", '></div></div><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></header>"], oa = ["<h2", ">Introduction</h2>"], ia = ["<p", ">I spent about 2.5 years in Rwanda serving as an IT education volunteer. It was an alternative service for Korean mandatory military service by KOICA (Korea International Cooperation Agency) under Ministry of Foreign Affairs.</p>"], la = ["<p", ">The above quote was the very first question I got from my students in my first lecture with the classic &lsquo;Hello World!&rsquo; example. This C/C++ programming course was intended for second-year IT-major students in a college in Rwanda.</p>"], ra = ["<p", ">...and this turned out to be one of my better days.</p>"], pa = ["<h2", ">Challenges (a.k.a. The Reality)</h2>"], ca = ["<p", ">When another student shouted right after my short instructions on how to use <em>shift</em> key, I realised that student had a German keyboard. Some students even had Arabic keyboards!</p>"], da = ["<p", ">But again, this was one of my <em>better</em> days \u2013 because, at least, the school had electricity on that day.</p>"], ga = ["<h3", ">Frequent power outage</h3>"], ua = ["<p", ">How many people in developing countries have 24/7 access to electricity? Some <em>obvious</em> things for us are considered <em>luxuries</em> for people living in this part of the world. Teaching any computer-related things without power was a great challenge for me and colleagues.</p>"], ha = ["<p", ">This fact extends to personal access to computers, not to mention individual&apos;s ability to afford one. We can safely assume the lecture hours are the only chances for students to use computers.</p>"], ba = ["<p", ">Power outage also causes maintenance issue. Due to the unstable electricity, computers have significantly lower lifespan, forcing schools to spend more money into parts.</p>"], ma = ["<h3", ">Rainy season</h3>"], wa = ["<p", ">This may sound strange, but the weather was a great blocker for running courses for two main reasons.</p>"], ya = ["<p", ">First reason is that during the rain, it is extremely dangerous to move in Rwanda due to high chances of lightning strikes. Also, one of the main affordable and reliable transportations is moto-taxi, which cannot run in heavy rain. This means most of the students will not make it to the school in such weather.</p>"], fa = ["<p", ">Another reason rain hinders lecture is due to tin roofs. Most Rwandan schools and houses are built with affordable tin roofs, which make much noise during rain. In a pouring rain, it is simply impossible to hear anything under such roof.</p>"], _a = ["<h3", ">Language barrier</h3>"], va = ["<p", ">Education in Rwanda after primary school is officially done in English. However, in rural areas where average education rate is relatively lower, it is realistically not possible to give lectures only in English.</p>"], xa = ["<p", ">On the other hand, there was no material on IT education written in Kinyarwanda language, so it was a great challenge for us to prepare our own lecture materials.</p>"], $a = ["<h2", ">Approach</h2>"], ja = ["<p", ">It is obvious that we, as a group of volunteers, cannot radically solve all the problems at once. We had to focus on what we could achieve within our service period.</p>"], Sa = ["<p", ">Our primary goal (targeted for IT education volunteers) was very clear \u2013 effectively teach students on how to type. We simply could not move on to next lecture without students being able to type!</p>"], Wa = ["<p", ">We decided to make a typing practice software, and we defined three main approaches to help ourselves achieve the goal:</p>"], Ca = ["<h2", ">Process</h2>"], ka = ["<p", ">Once our approaches were defined, we quickly started to build the actual software, aiming for a quick proof-of-concept test.</p>"], Pa = ["<p", ">The team focused on building a working prototype for the test phase. Meanwhile, we also gathered supporters from KOICA volunteers to arrange user testing sessions together with Rwanda Education Board.</p>"], Ba = ["<h3", ">User test</h3>"], Ta = ["<p", ">With the help of Rwanda Education Board and participating schools, we were able to gather students to try our software. We wanted to test if students could follow instructions, but more importantly, we wanted to know if this actually is an effective way of teaching. Below are our key findings.</p>"], Ia = ["<h3", ">Collaboration with Rwanda Education Board</h3>"], Xa = ["<p", ">One of the biggest challenges we had was the Kinyarwanda language. Also, gathering contents for typing exercises was extremely difficult due to lack of digital database on literature as well as rarity of Rwandan literatures.</p>"], Da = ["<p", ">For this, we collaborated with Rwanda Education Board to gather usable contents. They were able to provide us with already existing course materials, and they offered us to help with translating English literatures.</p>"], Ma = ["<p", ">In addition, they agreed to include typing practice as an official curriculum for all Rwandan schools, which would significantly make distribution easier. To support the process, KOICA offered to sponsor software CD production and provide trainings for teachers.</p>"], Ra = ["<h2", ">Outcome</h2>"], La = ["<p", ">Based on the user test outcomes, we finalised our software with improved features and local contents provided by Rwanda Education Board. At the same time, we proceeded to organise teaching sessions to introduce it as well as train first group of teachers and students.</p>"], Ka = ["<small", ">/\u02C8\u0272aruka/ n. to be quick</small>"], Aa = ["<h3", ">The software</h3>"], Ea = ["<p", ">The name <em>Nyaruka</em> was suggested by Rwanda Education Board, which \u2013 according to them \u2013 straightforwardly represents the purpose of &ldquo;enhancing typing speed.&rdquo;</p>"], qa = ["<p", ">The structure of the program is similar to other existing typing practice software, with keyboard position training and various exercises ranging from single characters to long paragraphs.</p>"], Oa = ["<p", ">We tried to gamify the learning process, hence the joyful design style with game-like interfaces. We found this very effective, as several people during showcase events challenged us to compete with typing speed. Interestingly, the gamifying process itself helped us to naturally come up with new evaluation criteria such as frequently mistaken keys.</p>"], Na = ["<h3", ">Applying to the field</h3>"], Ha = ["<p", ">After finalising our software, we actively sought for opportunities to utilise it in actual teaching situations. While in bulk production, it was pre-distributed to KOICA volunteers who could directly apply it in their teaching.</p>"], Fa = ["<p", ">We were also invited to <!--$-->", "<!--/--> \u2013 <em>Tech-girl camp</em> \u2013 organised by Peace Corps and Michigan State University as part of women empowerment programme. Together with their volunteers, we gave effective typing lessons to Rwandan girls using our software, along with other general IT courses.</p>"], Ga = ["<p", ">It was a great opportunity to test, develop and share teaching methods with education experts from the field, especially because many of KOICA volunteers did not have any pedagogical knowledge. We later shared our learnings with KOICA community to apply new methods in our teaching. Detailed evaluation report on Techkobwa camp can be found <!--$-->", "<!--/-->.</p>"], Ua = ["<h2", ">The Last Moment Failure</h2>"], Qa = ["<p", ">Everything seemed to be going so well, until the very last moment. And there was nothing we could do about it.</p>"], Za = ["<p", ">Rwanda Education Board has informed KOICA shortly after the production of software CDs that they cannot distribute CDs until we fix our content. We tried to triple check our contents together with the board members before the production, but unfortunately, this nevertheless happened.</p>"], za = ["<p", ">Things got really tricky as KOICA had already spent all budgets to produce CDs, and to make things worse, the team&apos;s service period was almost ending. If things could not be solved within a few weeks, there would nothing we could do.</p>"], Ja = ["<p", ">Rwanda Education Board and KOICA had several meetings to seek for solutions, but sadly the conflict only became worse into political arguments. Eventually, the distribution was postponed indefinitely, with neither side following up until today.</p>"], Va = ["<h2", ">Learnings and Next Steps</h2>"], Ya = ["<p", "><em>A project can nevertheless fail</em> \u2013 the team learnt it the hard way. Although we, as experienced volunteers in the actual fields, were clearly aware anything unexpected could happen, it was very hard for us to accept the result. The reason behind our failure was completely out of our control, and there was nothing we could do about it \u2013 a painful, but a lifetime lesson.</p>"], en = ["<h3", ">How can we teach IT without any digital tools?</h3>"], tn = ["<p", ">Despite the unsatisfactory result, like any other projects, our journey gave us priceless learnings. I personally found the collaboration with Peace Corps and Michigan State University really opened up my eyes.</p>"], sn = ["<p", ">As a computer education volunteer coming from non-teaching background, I have never thought about teaching the digital world without plugs. However, what those education experts demonstrated in the camp made me realise how creative teaching could be, and also how unprepared I was in giving such education to others.</p>"], an = ["<p", ">Just like preparing design workshops, those volunteers prepared a number of activities students could easily do without any power \u2013 for example, playing with binaries using simple black-and-white cards!</p>"], nn = ["<h3", ">Applying teaching methods for and with typing practice</h3>"], on = ["<p", ">Such experience also made me wonder if there would be more effective ways in teaching how to type. None of the team had any knowledge in pedagogy, nor did we learn typing with a software like this.</p>"], ln = ["<p", ">I recently (2019) had a good discussion with a friend regarding this project, as I am currently planning to re-develop the software. He suggested me to focus on <em>utilising</em> the software in teaching rather than focusing on the typing itself, as most of us ourselves learnt typing naturally rather than by practicing with a software.</p>"], rn = ["<p", ">Inspired by this, and also looking back on one of our first aims to increase literacy, I hope to re-launch this project in open source and suggest a new school curriculum for developing countries, in which students have more chances to read and type.</p>"], pn = ["<main", '><div class="container-fluid"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></main>"], cn = ["<em", ">Nyaruka!</em>"], dn = ["<abbr", ' title="Korea International Cooperation Agency">KOICA</abbr>'], gn = ["<p", ">The main reason we decided to develop <em>another</em> typing practice software was because there was surprisingly no available multilingual solution. The whole point of this is to make education material written in Kinyarwanda language.</p>"], un = ["<p", ">The software is mainly for teaching young students, and we also observed many of them are often afraid to use computer for the first time. We tried to make our software joyful so students can <em>enjoy</em> learning to type.</p>"], hn = ["<p", ">Many students in Rwanda have limited access to books. <!--$-->", "<!--/-->. We thought we could help them read more by including literatures for long paragraph typing exercises.</p>"], bn = ["<p", ">During our tests, it became clear that students have no problem in following our software if we give them clear instructions. This also meant proper training for teachers on utilising the software is necessary.</p>"], mn = ["<p", ">Our observations gave some inspirations on features as well. For example, we found out that students tended to keep their eyes on on-screen keyboard, which prevented them from improving \u2013 so we implemented a feature to completely hide the keyboard.</p>"], wn = ["<p", ">Although we were aware our software needed to run on low-end machines, there still were things we could not consider, for example, ultra-low resolution. Our test sessions helped us to ensure more coverage for schools.</p>"];
function jn() {
  return [ssr(na, ssrHydrationKey() + ssrAttribute("class", escape(_e$1.header, true), false), ssrAttribute("class", escape(_e$1.hero, true), false), escape(createComponent(L$1, { alt: "Nyaruka! Typing Practice", get class() {
    return _e$1.bg;
  }, srcset: u })), ssrAttribute("class", escape(_e$1.overlay, true), false), escape(createComponent(P$1, { get title() {
    return [ssr(cn, ssrHydrationKey()), " Typing practice software for Rwanda"];
  }, headline: `
              In a hope for better IT education for students who have never seen
              a computer in their life
            ` })), escape(createComponent(fe$1, { get agency() {
    return ssr(dn, ssrHydrationKey());
  }, agencyLink: "https://koica.go.kr/", client: "Rwanda Education Board", clientLink: "https://reb.rw/", overview: `
              I collaborated with a developer and an artist to design and build
              the typing practice software. I took further actions to distribute
              it to all Rwandan schools and gave actual lectures to students.
            `, roles: ["UI/UX design", "User research", "Project management", "Product distribution"], year: "2012-2015" }))), ssr(pn, ssrHydrationKey() + ssrAttribute("class", escape(_e$1.main, true), false), escape(createComponent(oe$1, { children: "Hey teacher, how do I type a hash(#)?" })), escape(createComponent(b, { get children() {
    return [ssr(oa, ssrHydrationKey()), ssr(ia, ssrHydrationKey()), ssr(la, ssrHydrationKey()), ssr(ra, ssrHydrationKey())];
  } })), escape(createComponent(de$1, {})), escape(createComponent(oe$1, { children: "But my keyboard does not have\xA0[#]!" })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(pa, ssrHydrationKey()), ssr(ca, ssrHydrationKey()), ssr(da, ssrHydrationKey())];
  } })), escape(createComponent(me$1, { alt: "Teaching how to type without a computer", srcset: Gt })), escape(createComponent(b, { get children() {
    return [ssr(ga, ssrHydrationKey()), ssr(ua, ssrHydrationKey()), ssr(ha, ssrHydrationKey()), ssr(ba, ssrHydrationKey()), ssr(ma, ssrHydrationKey()), ssr(wa, ssrHydrationKey()), ssr(ya, ssrHydrationKey()), ssr(fa, ssrHydrationKey()), ssr(_a, ssrHydrationKey()), ssr(va, ssrHydrationKey()), ssr(xa, ssrHydrationKey())];
  } })), escape(createComponent(de$1, {})), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr($a, ssrHydrationKey()), ssr(ja, ssrHydrationKey()), ssr(Sa, ssrHydrationKey()), ssr(Wa, ssrHydrationKey())];
  } })), escape(createComponent(A$1, { get cards() {
    return [{ title: "Localisation", children: ssr(gn, ssrHydrationKey()) }, { title: "Playfulness", children: ssr(un, ssrHydrationKey()) }, { title: "Literacy", children: ssr(hn, ssrHydrationKey(), escape(createComponent(_$1, { href: "https://knoema.com/atlas/Rwanda/topics/Education/Literacy/Adult-literacy-rate", children: "Statistics show literacy rate in Rwanda was below 70% in 2012" }))) }];
  }, col: 3 })), escape(createComponent(de$1, {})), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Ca, ssrHydrationKey()), ssr(ka, ssrHydrationKey()), ssr(Pa, ssrHydrationKey())];
  } })), escape(createComponent(me$1, { alt: "User testing with students", srcset: aa })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Ba, ssrHydrationKey()), ssr(Ta, ssrHydrationKey())];
  } })), escape(createComponent(A$1, { get cards() {
    return [{ title: "Teaching methods", children: ssr(bn, ssrHydrationKey()) }, { title: "Missing features", children: ssr(mn, ssrHydrationKey()) }, { title: "Technical considerations", children: ssr(wn, ssrHydrationKey()) }];
  }, col: 3, noPadding: true })), escape(createComponent(b, { get children() {
    return [ssr(Ia, ssrHydrationKey()), ssr(Xa, ssrHydrationKey()), ssr(Da, ssrHydrationKey()), ssr(Ma, ssrHydrationKey())];
  } })), escape(createComponent(de$1, {})), escape(createComponent(me$1, { alt: "Me demonstrating how to type", srcset: xs })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Ra, ssrHydrationKey()), ssr(La, ssrHydrationKey())];
  } })), escape(createComponent(oe$1, { noQuote: true, get children() {
    return ["Nyaruka ", ssr(Ka, ssrHydrationKey()), " "];
  } })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Aa, ssrHydrationKey()), ssr(Ea, ssrHydrationKey())];
  } })), escape(createComponent(me$1, { alt: "Character practice screen", srcset: tt })), escape(createComponent(b, { noPadding: true, get children() {
    return ssr(qa, ssrHydrationKey());
  } })), escape(createComponent(v$1, { images: [{ srcset: ce, alt: "Level selection" }, { srcset: Z, alt: "Level complete" }, { srcset: Tt, alt: "Special keys training" }, { srcset: mt, alt: "Short sentences" }, { srcset: Ee, alt: "Long paragraph selection" }, { srcset: Se, alt: "Long paragraph practice screen" }], noPadding: true })), escape(createComponent(b, { noPadding: true, get children() {
    return ssr(Oa, ssrHydrationKey());
  } })), escape(createComponent(me$1, { alt: "Our software in use at school", srcset: D })), escape(createComponent(b, { noPadding: true, get children() {
    return [ssr(Na, ssrHydrationKey()), ssr(Ha, ssrHydrationKey()), ssr(Fa, ssrHydrationKey(), escape(createComponent(_$1, { href: "https://www.egr.msu.edu/techkobwa/", children: "Techkobwa camp" })))];
  } })), escape(createComponent(me$1, { alt: "Covering keyboards while teaching", srcset: ls })), escape(createComponent(b, { get children() {
    return ssr(Ga, ssrHydrationKey(), escape(createComponent(_$1, { href: "https://www.egr.msu.edu/techkobwa/sites/default/files/content/CampTechKobwaEvaluationReport2015-FINAL.pdf", children: "here" })));
  } })), escape(createComponent(de$1, {})), escape(createComponent(oe$1, { children: "Sorry, we need to remove the content about the Genocide." })), escape(createComponent(b, { get children() {
    return [ssr(Ua, ssrHydrationKey()), ssr(Qa, ssrHydrationKey()), ssr(Za, ssrHydrationKey()), ssr(za, ssrHydrationKey()), ssr(Ja, ssrHydrationKey())];
  } })), escape(createComponent(de$1, {})), escape(createComponent(b, { get children() {
    return [ssr(Va, ssrHydrationKey()), ssr(Ya, ssrHydrationKey()), ssr(en, ssrHydrationKey()), ssr(tn, ssrHydrationKey()), ssr(sn, ssrHydrationKey()), ssr(an, ssrHydrationKey()), ssr(nn, ssrHydrationKey()), ssr(on, ssrHydrationKey()), ssr(ln, ssrHydrationKey()), ssr(rn, ssrHydrationKey())];
  } })))];
}
function Sn(h) {
  return createComponent(L$1, { alt: "Nyaruka Typing Practice Software", get class() {
    return m(h.class, ue$1.coverElement);
  }, srcset: u });
}

const typingPractice = /*#__PURE__*/Object.freeze({
            __proto__: null,
            default: jn
});

export { Sn as S, typingPractice as t };
//# sourceMappingURL=typing-practice2.mjs.map
