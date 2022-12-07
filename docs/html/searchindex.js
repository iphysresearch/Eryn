Search.setIndex({docnames:["README","index","tutorial/Eryn_tutorial","user/backend","user/ensemble","user/moves","user/prior","user/state","user/temper","user/utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,nbsphinx:3,sphinx:56},filenames:["README.rst","index.rst","tutorial/Eryn_tutorial.ipynb","user/backend.rst","user/ensemble.rst","user/moves.rst","user/prior.rst","user/state.rst","user/temper.rst","user/utils.rst"],objects:{"eryn.backends":{Backend:[3,0,1,""],HDFBackend:[3,0,1,""]},"eryn.backends.Backend":{accepted:[3,1,1,""],betas:[3,1,1,""],blobs:[3,1,1,""],branch_names:[3,1,1,""],chain:[3,1,1,""],dtype:[3,1,1,""],get_a_sample:[3,2,1,""],get_autocorr_thin_burn:[3,2,1,""],get_autocorr_time:[3,2,1,""],get_betas:[3,2,1,""],get_blobs:[3,2,1,""],get_chain:[3,2,1,""],get_evidence_estimate:[3,2,1,""],get_inds:[3,2,1,""],get_info:[3,2,1,""],get_last_sample:[3,2,1,""],get_log_like:[3,2,1,""],get_log_prior:[3,2,1,""],get_nleaves:[3,2,1,""],get_value:[3,2,1,""],grow:[3,2,1,""],has_blobs:[3,2,1,""],inds:[3,1,1,""],initiailized:[3,1,1,""],iteration:[3,1,1,""],log_like:[3,1,1,""],log_prior:[3,1,1,""],nbranches:[3,1,1,""],ndims:[3,1,1,""],nleaves_max:[3,1,1,""],ntemps:[3,1,1,""],nwalkers:[3,1,1,""],reset:[3,2,1,""],reset_args:[3,1,1,""],reset_base:[3,2,1,""],reset_kwargs:[3,1,1,""],rj:[3,1,1,""],rj_accepted:[3,1,1,""],save_step:[3,2,1,""],shape:[3,3,1,""],store_missing_leaves:[3,1,1,""]},"eryn.backends.HDFBackend":{get_a_sample:[3,2,1,""],get_autocorr_thin_burn:[3,2,1,""],get_autocorr_time:[3,2,1,""],get_betas:[3,2,1,""],get_blobs:[3,2,1,""],get_chain:[3,2,1,""],get_evidence_estimate:[3,2,1,""],get_inds:[3,2,1,""],get_info:[3,2,1,""],get_last_sample:[3,2,1,""],get_log_like:[3,2,1,""],get_log_prior:[3,2,1,""],get_nleaves:[3,2,1,""],get_value:[3,2,1,""],grow:[3,2,1,""],has_blobs:[3,2,1,""],open:[3,2,1,""],reset:[3,2,1,""],reset_base:[3,2,1,""],save_step:[3,2,1,""],shape:[3,3,1,""]},"eryn.ensemble":{EnsembleSampler:[4,0,1,""]},"eryn.ensemble.EnsembleSampler":{acceptance_fraction:[4,3,1,""],compute_log_like:[4,2,1,""],compute_log_prior:[4,2,1,""],get_autocorr_time:[4,2,1,""],get_betas:[4,2,1,""],get_blobs:[4,2,1,""],get_chain:[4,2,1,""],get_inds:[4,2,1,""],get_last_sample:[4,2,1,""],get_log_like:[4,2,1,""],get_log_prior:[4,2,1,""],get_model:[4,2,1,""],get_nleaves:[4,2,1,""],get_value:[4,2,1,""],priors:[4,3,1,""],random_state:[4,3,1,""],reset:[4,2,1,""],rj_acceptance_fraction:[4,3,1,""],rj_swap_acceptance_fraction:[4,3,1,""],run_mcmc:[4,2,1,""],sample:[4,2,1,""],swap_acceptance_fraction:[4,3,1,""]},"eryn.moves":{GaussianMove:[5,0,1,""],MHMove:[5,0,1,""],Move:[5,0,1,""],PriorGenerate:[5,0,1,""],RedBlueMove:[5,0,1,""],ReversibleJump:[5,0,1,""],StretchMove:[5,0,1,""]},"eryn.moves.GaussianMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.MHMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.Move":{compute_log_posterior_basic:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.PriorGenerate":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.RedBlueMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],setup:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.ReversibleJump":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.StretchMove":{a:[5,1,1,""],adjust_factors:[5,2,1,""],compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],return_gpu:[5,1,1,""],setup:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""],use_gpu:[5,1,1,""],xp:[5,1,1,""]},"eryn.moves.tempering":{TemperatureControl:[8,0,1,""],make_ladder:[8,4,1,""]},"eryn.moves.tempering.TemperatureControl":{temperature_swaps:[8,2,1,""]},"eryn.prior":{MappedUniformDistribution:[6,0,1,""],PriorContainer:[6,0,1,""],log_uniform:[6,4,1,""],uniform_dist:[6,4,1,""]},"eryn.prior.MappedUniformDistribution":{logpdf:[6,2,1,""],rvs:[6,2,1,""]},"eryn.prior.PriorContainer":{logpdf:[6,2,1,""],ndim:[6,1,1,""],ppf:[6,2,1,""],priors:[6,1,1,""],priors_in:[6,1,1,""],rvs:[6,2,1,""]},"eryn.state":{Branch:[7,0,1,""],State:[7,0,1,""]},"eryn.state.Branch":{nleaves:[7,3,1,""]},"eryn.state.State":{branches_coords:[7,3,1,""],branches_inds:[7,3,1,""],branches_supplimental:[7,3,1,""],get_log_prob:[7,2,1,""]},"eryn.utils":{PeriodicContainer:[9,0,1,""],PlotContainer:[9,0,1,""],TransformContainer:[9,0,1,""]},"eryn.utils.PeriodicContainer":{distance:[9,2,1,""],wrap:[9,2,1,""]},"eryn.utils.PlotContainer":{add_backend:[9,2,1,""],generate_corner:[9,2,1,""],generate_info_page:[9,2,1,""],generate_k_per_temperature_chains:[9,2,1,""],generate_k_per_tree_chains:[9,2,1,""],generate_leaves_chains:[9,2,1,""],generate_parameter_chains:[9,2,1,""],generate_parameter_chains_per_temperature:[9,2,1,""],generate_parameter_chains_per_temperature_per_walker:[9,2,1,""],generate_plot_info:[9,2,1,""],generate_posterior_chains:[9,2,1,""],generate_temperature_chains:[9,2,1,""],transform:[9,2,1,""]},"eryn.utils.TransformContainer":{fill_values:[9,2,1,""],transform_base_parameters:[9,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:property","4":"py:function"},terms:{"0":[0,1,2,3,4,5,8,9],"00":2,"00000001":2,"0001":2,"000697616071093":2,"00072210e":2,"00260264e":2,"00355824e":2,"00424651e":2,"00621098e":2,"00690921e":2,"009058310747992":2,"00909641e":2,"00936261e":2,"01":2,"01040764":2,"01178002e":2,"01512520e":2,"01553382e":2,"01581470e":2,"01625194e":2,"01728659e":2,"01818181e":2,"01988682e":2,"02":2,"02056507e":2,"02183692e":2,"02191783":2,"02297895":2,"02363641e":2,"02493852":2,"02673368":2,"02684440e":2,"027584847542167":2,"02782671e":2,"02810079e":2,"02898281":2,"02994371e":2,"03":2,"03045611e":2,"03289018":2,"03506137e":2,"03567936e":2,"03650716e":2,"03810478":2,"03817694":2,"03818056e":2,"03941718e":2,"04":2,"04251137":2,"04508277e":2,"0502107":2,"05072061e":2,"05237241":2,"05250032e":2,"05321678e":2,"05376261":2,"05414507e":2,"05459089268453":2,"05558931e":2,"05705033e":2,"05713856e":2,"05768945e":2,"05823":8,"05863401e":2,"05908606e":2,"06342157e":2,"063684185602074":2,"06409617":2,"06476169e":2,"06569268e":2,"06682120e":2,"06704476331893":2,"06962704e":2,"06it":2,"07206293":2,"07245692":2,"07433212e":2,"07540432e":2,"07560063e":2,"07604525e":2,"07620219e":2,"07718515e":2,"07758357":2,"07815586e":2,"07998188e":2,"08239210e":2,"08302135e":2,"08347249e":2,"08461540e":2,"08498797e":2,"08587029":2,"09020387e":2,"09087148e":2,"09205733316421":2,"0925304":2,"09399014e":2,"09464227":2,"09561382":2,"09590615e":2,"09629825e":2,"09694216e":2,"09935189e":2,"0x170ece4c0":2,"0x175682040":2,"0x177ad93a0":2,"1":[0,1,2,3,4,5,6,8,9],"10":2,"100":[2,8],"1000":2,"10000":[2,8],"10168603e":2,"10277004":2,"10278803":2,"10580722":2,"10581548":2,"11":2,"11030339e":2,"11165507e":2,"11210745":2,"11415875e":2,"11517007e":2,"11548387e":2,"11648516e":2,"11713884e":2,"11741768e":2,"11760916e":2,"11762275e":2,"11872863e":2,"12":2,"12038353e":2,"12148614396511":2,"12524552e":2,"12633256e":2,"12718498062653":2,"12754976e":2,"12819892e":2,"12956698e":2,"13":2,"13017273e":2,"13028032e":2,"13058222e":2,"13117452e":2,"13119860e":2,"13193638":2,"13209592e":2,"13212497":2,"13269287e":2,"13308071":2,"13343973e":2,"13791318e":2,"13872889e":2,"13931177e":2,"14":2,"14075088":2,"14088669e":2,"14187455e":2,"14230031e":2,"1429558":2,"14477472e":2,"14564213e":2,"14581788e":2,"14687277e":2,"14762173e":2,"15":2,"1501":8,"15131637e":2,"15172714e":2,"15368313e":2,"15382136e":2,"15481995e":2,"15555109e":2,"15618694":2,"15662608":2,"15707218e":2,"15731891":2,"15835422":2,"15955454909765":2,"16":2,"16219733e":2,"16279022e":2,"16305075":2,"16374244e":2,"16374934e":2,"16645058e":2,"166666057493867":2,"167339094387502":2,"17":2,"17129273e":2,"17191406689161":2,"17195007e":2,"17309062e":2,"1732853":2,"17361073e":2,"17446802e":2,"17484741e":2,"175":2,"17669429e":2,"17726471":2,"177275804769963":2,"18":2,"18079950e":2,"18093864":2,"182025801962808":2,"18385793e":2,"18410851":2,"1843373":2,"185631833515409":2,"18607669":2,"18991868":2,"19":2,"19040768e":2,"19076129e":2,"19109066e":2,"19110693e":2,"19151257e":2,"19155909e":2,"19307031":2,"19432898e":2,"19625567e":2,"19626951e":2,"19744949":2,"197520429651778":2,"19787576e":2,"19972187e":2,"1d":[3,4],"1e":4,"1e300":4,"2":[2,3,4,5],"20":2,"20041906602199":2,"2010":5,"2013":5,"20145632e":2,"201618828385325":2,"20306761e":2,"20561885e":2,"20626445e":2,"20643694e":2,"206672383919198":2,"20802127":2,"20830025e":2,"20957759e":2,"209947253912995":2,"21":2,"21036777460609":2,"21170699e":2,"21532719e":2,"21797001e":2,"21885479e":2,"22":2,"220604581103181":2,"22175612e":2,"22294092":2,"22345815e":2,"22594825e":2,"22668818":2,"22766639":2,"22784602e":2,"23":2,"23116377e":2,"23323422e":2,"23549404e":2,"23550445e":2,"23569381e":2,"237":2,"23732861e":2,"23946826e":2,"24":2,"24166756e":2,"24240432e":2,"24608739e":2,"24698912":2,"24777582":2,"24853289649521":2,"24880018e":2,"24904458e":2,"24925736e":2,"24966713e":2,"24996470e":2,"25":[2,8],"250":2,"2500":2,"25166983e":2,"25229291e":2,"25310739":2,"25328121e":2,"25399003":2,"25650003":2,"25676420e":2,"2575306":2,"25790976e":2,"25802303":2,"26":2,"26041351":2,"26045709":2,"26212594e":2,"263627585992179":2,"26384056e":2,"26536860e":2,"26537623e":2,"26629311e":2,"26687455e":2,"26853894e":2,"27":2,"27195605e":2,"27397055e":2,"27572764e":2,"27656854e":2,"27893539e":2,"27932905e":2,"28":2,"28025486e":2,"28081336e":2,"2820529":2,"28257398e":2,"28356937e":2,"28364926e":2,"28377176e":2,"2837720949975":2,"28593798e":2,"28645583e":2,"287975620845916":2,"288874810370201":2,"28988890e":2,"29":2,"29046058e":2,"29086764e":2,"29127772e":2,"29449201":2,"29488605":2,"29498444e":2,"2973031911239":2,"29756886e":2,"29765585e":2,"29878817e":2,"29898692e":2,"29913963":2,"2d":[3,4],"3":[2,4,5],"30":2,"300":4,"30072552e":2,"30104845e":2,"30205814e":2,"306867527629654":2,"30815264e":2,"30841482e":2,"30884375e":2,"30906695e":2,"31":2,"31173894e":2,"31311317":2,"318039074525378":2,"318102365933672":2,"319736841299754":2,"31982881e":2,"32":2,"32066335":2,"32153097":2,"32264582":2,"323718037268904":2,"32455253e":2,"32560629":2,"32852432e":2,"32945619":2,"33":2,"330454126226034":2,"33134251e":2,"333740402421263":2,"33428717e":2,"33786195":2,"33997936e":2,"34":2,"34093804e":2,"34111542e":2,"34148567e":2,"34328003":2,"345487493852174":2,"34619739e":2,"34629761":2,"34700121e":2,"34964354e":2,"35":2,"3500181":2,"35057026e":2,"35099569e":2,"3527218":2,"35274089":2,"35309536":2,"35450699e":2,"35603738e":2,"35775760e":2,"3584848":2,"358573324153861":2,"35974252e":2,"36":2,"36085913e":2,"361187774055535":2,"36123373":2,"36431241":2,"366415981314853":2,"37":2,"37039294":2,"37048819e":2,"37118884":2,"37324714e":2,"37398924e":2,"37553076e":2,"37653078":2,"37669078e":2,"37694547e":2,"38":2,"38021849e":2,"38031118":2,"3810526":2,"3819265":2,"38898327e":2,"39":2,"39168564e":2,"39182477e":2,"39228333":2,"39368888":2,"39591868":2,"39634000e":2,"39670766":2,"39695904e":2,"39747766":2,"39804417e":2,"39808627e":2,"3d":[2,3,7],"4":[2,4],"40":2,"40386882":2,"40405620e":2,"40676226e":2,"4080743":2,"40855724":2,"40858203e":2,"41252563e":2,"41272599":2,"41402824":2,"41512418e":2,"41587351":2,"41867129e":2,"41877248e":2,"41930255e":2,"41987524":2,"42":2,"42033703e":2,"42360664":2,"42491300e":2,"429872284958009":2,"43":2,"43150175e":2,"43201382":2,"43261582e":2,"43294906e":2,"43301692":2,"43378049":2,"43708370e":2,"43806876e":2,"43994125e":2,"44":2,"44184142":2,"44316586e":2,"44449938e":2,"44610878":2,"44705546e":2,"44791254e":2,"44875479e":2,"44942245e":2,"44945920e":2,"45":2,"45070815e":2,"45358143e":2,"45472342e":2,"45503317":2,"45549403":2,"45552139e":2,"455994255558881":2,"45608498":2,"45627855":2,"45896320e":2,"46":2,"46391034":2,"46453754e":2,"46515268e":2,"46614494":2,"46651653":2,"46679903e":2,"46832585e":2,"46900407e":2,"46929288":2,"47":2,"47419261":2,"47503264e":2,"47512843":2,"47641726":2,"47709705e":2,"47739894e":2,"477454735452302":2,"47959226":2,"48":2,"480327598172524":2,"48063082e":2,"48192220e":2,"48307737e":2,"48482521e":2,"48634414":2,"48777215":2,"48936242e":2,"49084468e":2,"49096118e":2,"49325571e":2,"49327275e":2,"493826923458506":2,"49613285":2,"4d":[3,7],"5":[1,4,5],"50":2,"500":2,"5000":[],"50221170e":2,"50717845e":2,"50792402e":2,"508584980057442":2,"50898646e":2,"51":2,"51075629e":2,"51272062":2,"51292546":2,"51465938":2,"51621258e":2,"51642261":2,"51788170e":2,"52265084e":2,"52366152e":2,"52526005":2,"52882067e":2,"52923152e":2,"52930255e":2,"53243358e":2,"53342255e":2,"53454745":2,"534843295419698":2,"53493090e":2,"53589636":2,"535904414377118":2,"53616891e":2,"53758866e":2,"53831794e":2,"5383962":2,"53962538e":2,"54":2,"54166543":2,"55020633e":2,"55075872":2,"551030240748224":2,"551102404030136":2,"55396702e":2,"5541193":2,"55436774e":2,"55535020e":2,"55648912e":2,"55683814e":2,"5583328":2,"55864481e":2,"55917430e":2,"56139796":2,"56151466":2,"56251993e":2,"56313616851288":2,"56334330e":2,"56471961e":2,"5652978728914":2,"56544639e":2,"566688073600343":2,"56it":2,"57327891e":2,"57594664":2,"577021635399863":2,"57863213":2,"57913187":2,"58182769e":2,"58751379":2,"590509038171271":2,"59208011":2,"59592624e":2,"59718980e":2,"59802298e":2,"59926323e":2,"5d":3,"6":2,"60372022e":2,"60372232":2,"60532864e":2,"605455861333246":2,"60643860e":2,"60689686e":2,"6083427":2,"60843452e":2,"60856068":2,"60958324e":2,"61013717e":2,"61262512e":2,"61425952":2,"615695504490748":2,"61686543e":2,"61701175e":2,"618732680723763":2,"62275731e":2,"62457723":2,"62833193e":2,"62876958":2,"6288042":2,"62884932e":2,"63324244":2,"63366721e":2,"63670509":2,"63696990e":2,"6395355":2,"64012263e":2,"64089788e":2,"644861845259639":2,"64572810e":2,"646006173265935":2,"64608605e":2,"64619320e":2,"64662908":2,"64772976e":2,"64774635e":2,"65374059":2,"65441363":2,"65492139e":2,"65565609e":2,"655881269058789":2,"65628455e":2,"65755241":2,"65807937":2,"65893674e":2,"6589886":2,"66047342e":2,"66327643":2,"66391471e":2,"66435034":2,"66468281e":2,"66486977":2,"66639971":2,"66817968e":2,"66860914e":2,"66910034":2,"6691124060966":2,"66it":2,"671279685052703":2,"67270637":2,"67409531":2,"67496753":2,"67607316e":2,"67631032":2,"67658450e":2,"68012127e":2,"68417687e":2,"68459496":2,"68572550e":2,"68596832e":2,"686210760179495":2,"68678623":2,"6874936":2,"68860327e":2,"68869336":2,"69081114e":2,"69207360e":2,"69233565e":2,"69374692":2,"693864100180623":2,"69702179":2,"697033973828631":2,"69714113e":2,"69744231":2,"69792325e":2,"69858605":2,"6990021540539":2,"7":2,"7003192":2,"70138195":2,"70250364e":2,"70569247":2,"70673871e":2,"70767912":2,"70787041e":2,"71012131":2,"710374958113102":2,"71168702e":2,"71186437e":2,"71249158e":2,"71277870e":2,"71339587":2,"71403265e":2,"71460501e":2,"71534795e":2,"71553599e":2,"71557368":2,"71578138":2,"71588695e":2,"72094673416529":2,"72102364e":2,"72131899":2,"72150734":2,"72273245e":2,"72366977e":2,"72401774e":2,"72707650e":2,"72808992":2,"73249095e":2,"73314318e":2,"73433945e":2,"73441074":2,"73450427":2,"73536238e":2,"73560743":2,"73642331e":2,"73926351e":2,"74215381e":2,"74521436e":2,"74572396e":2,"74642537e":2,"74792252e":2,"74868137e":2,"74975937e":2,"75070212":2,"75236033e":2,"75517653e":2,"75566864e":2,"75644713e":2,"75776470e":2,"75827593e":2,"76238434e":2,"76385853e":2,"76500856":2,"76754498e":2,"769425499474632":2,"770456067028594":2,"77084663":2,"77171884e":2,"77243825e":2,"77346437e":2,"77366496":2,"77505016":2,"77594935":2,"77714736e":2,"77990117e":2,"78326900e":2,"78437773":2,"78508305":2,"78880880e":2,"78887425e":2,"79050623":2,"79275524":2,"7938995":2,"79394206":2,"794978368963069":2,"8":2,"80164964e":2,"80442144e":2,"80511361":2,"8051769":2,"80604546e":2,"80681138":2,"807811510546149":2,"80881962e":2,"81079257":2,"81205977e":2,"812065097627617":2,"81255552e":2,"81752866":2,"81767283e":2,"81860432e":2,"81881055e":2,"81923972e":2,"82039264e":2,"82048224e":2,"82081494":2,"82165991e":2,"82272349e":2,"82365756":2,"82505165e":2,"83144973e":2,"83256203":2,"833588817748547":2,"834456434408597":2,"835571281559565":2,"83626006e":2,"83647521e":2,"83674224e":2,"83707927e":2,"83741982":2,"83751514e":2,"83840707e":2,"838531752608766":2,"84023913e":2,"84171927":2,"8427905":2,"84306809e":2,"84399638e":2,"84518648":2,"84564786":2,"84712031e":2,"84826231":2,"85099566e":2,"85171116e":2,"85186078e":2,"85349052":2,"85386034e":2,"85514981e":2,"85601841e":2,"856205494617711":2,"862943563633566":2,"86313009e":2,"865666352455646":2,"86570709e":2,"86631926e":2,"86683865e":2,"86966036e":2,"86it":2,"87016183e":2,"87142419e":2,"87479598e":2,"8753185":2,"877237875605088":2,"87775192e":2,"87810588e":2,"87979115e":2,"88388151e":2,"88594767":2,"88613553":2,"889456246665725":2,"88982593":2,"89191623e":2,"89323664751312":2,"89345017e":2,"893978068157692":2,"89401969e":2,"89789397e":2,"9":2,"90455969e":2,"90758502":2,"90794157e":2,"908844140114212":2,"90949948e":2,"909633127086721":2,"91101685e":2,"91198680e":2,"91498259e":2,"91510758e":2,"91686114e":2,"91694682":2,"91765459":2,"91778555e":2,"92067800e":2,"92148270602327":2,"92432228":2,"93018257e":2,"932800709919292":2,"93610511":2,"936532101543465":2,"93705593e":2,"93757703e":2,"93847662e":2,"93933135e":2,"93983680e":2,"94114150e":2,"94132413e":2,"94306879":2,"95322125e":2,"95338824e":2,"954766888488795":2,"95851013e":2,"96190939e":2,"96294124e":2,"96300942":2,"96359247e":2,"96452927":2,"96527418e":2,"96569731":2,"96661796e":2,"96698669e":2,"96740213":2,"96795863879418":2,"96807186e":2,"96839538":2,"968419490353646":2,"969010441825302":2,"97315756e":2,"97387226e":2,"97471335e":2,"97542909e":2,"97617279e":2,"97683580667583":2,"979070401548165":2,"98065915":2,"98071728e":2,"98090146":2,"98349628e":2,"98407987e":2,"98604619e":2,"98628034e":2,"98711807655929":2,"988053893367788":2,"989342729251522":2,"99215316":2,"99565952":2,"99636574":2,"99652815e":2,"9977553":2,"99860468e":2,"999269605668973":2,"abstract":5,"boolean":[3,5],"case":[2,4],"class":[1,2,3,4,6,7,8,9],"default":[2,3,4,5,7,8,9],"do":[2,4,5,6],"final":[2,9],"float":[5,8],"function":[2,3,4,5,6,8,9],"import":2,"int":[2,3,4,5,6,8,9],"long":8,"new":[2,4,5,9],"public":2,"return":[2,3,4,5,6,7,8,9],"switch":[4,5],"throw":3,"true":[2,3,4,5,7,8,9],"try":4,A:[2,3,4,5,7,9],At:2,By:[4,5],For:[2,4,5,8],If:[2,3,4,5,6,7,8,9],In:[2,4],It:[2,3,4,5,7,9],That:2,The:[1,3,4,5,6,7,8],Then:2,There:2,These:[2,3,5,9],To:2,With:[2,4],_:[2,5,6],__:2,__file__:[],__init__:[],_t:2,abc:5,abil:2,about:[2,4,5,9],abov:[2,4,8],accept:[2,3,4,5,8],acceptance_fract:4,access:[2,3,4],accord:[6,8,9],account:2,across:[2,3,4],act:8,action:2,actual:2,ad:[2,3,4,5,9],adap:8,adapation_tim:8,adapt:8,adaptation_lag:8,adaptation_tim:8,add:[1,4,5,9],add_backend:9,addit:[2,5],adjust:[3,5,8],adjust_factor:5,adjust_supps_pre_logl_func:5,adjuststretchproposalscal:4,advanc:[2,4],affin:5,after:[2,4,5,8,9],again:[2,5],aid:2,al:5,algorithm:[2,8],align:5,all:[2,3,4,5,6,7,8,9],all_coord:5,all_ind:5,all_inds_for_chang:5,all_temp:[3,4],allow:[2,3,4,7,8],along:9,alpha:2,alpha_t:2,also:[2,3,8,9],alwai:2,among:3,amplitud:[2,8],an:[2,3,4,5,6,7,8,9],anaconda3:[],analyz:4,ani:[2,3,4,5],anoth:[2,4],anyth:5,append:2,appli:[4,7],applic:2,ar:[2,3,4,5,6,7,8,9],arang:2,arg:[2,4,5],argument:[2,3,4,5,8,9],around:7,arrai:[1,3,4,5,7,8,9],arrang:6,arxiv:8,asarrai:2,ask:2,assess:[2,4],assign:[2,4,5],associ:[2,3,4,5,6,7,8,9],assum:[2,5],attach:2,attempt:4,attribut:[3,4,9],autocorr:[3,4],autocorrel:[3,4,9],automat:[4,5,9],autoreload:2,avail:[1,2],avoid:5,ax:2,ax_t:2,axi:[2,5],b:2,backend:[1,4,7,8,9],balanc:[2,5],bar:4,base:[2,3,4,5,6,7,8,9],base_transform:9,basi:8,basic:[1,3,4],bay:2,becaus:[2,4,5],becom:[2,4,8],been:[3,4],befor:[2,4,9],being:[4,5],belong:[2,4],below:[2,4,8],bet:8,beta:[2,3,7,8],beta_1:2,beta_2:2,better:2,between:[2,3,4,5,6,8],bin:2,birth:4,blob:[2,3,4,7,8],blobs_dtyp:4,blue:1,bn:2,bool:[2,3,4,5,7,8,9],both:3,boundari:4,branch:[1,3,4,5,7,8,9],branch_nam:[2,3,4,5,7,9],branch_supp:[4,8],branch_suppliment:7,branches_coord:[2,4,5,7],branches_ind:[4,5,7],branches_suppliment:7,branchsuppliment:[2,4,7],broadcast:5,build:[2,9],built:[4,6],bunch:2,burn:[2,3,4,8,9],burnin:9,c:2,c_all:5,calcul:[2,3,4],call:[2,4],callabl:4,can:[2,4,5,8,9],capabl:2,care:[6,8,9],carri:[2,4,7],carrier:5,center:2,certain:2,chain:[2,3,4,8,9],chang:[2,5],check:[2,3,4,5],choos:[2,8],chosen:[2,8],circumst:2,citat:5,cite:2,clariti:2,classmethod:5,clear:3,close:9,code:[2,8],cold:[2,9],color:2,com:[2,8],combin:2,combine_gaussian:2,combine_sin:2,come:9,common:2,commonli:2,compar:2,complement:5,complementari:5,complet:[5,7],complex:2,complic:[2,8],compliment:5,compon:[2,4,7],compress:3,compression_opt:3,comput:[2,3,4,5,7],compute_log_lik:4,compute_log_posterior_bas:5,compute_log_prior:4,concept:2,concret:5,condit:4,confus:2,consid:[4,5,7],consist:9,constant:[2,8],construct:4,contain:[1,3,4,5,7],contribut:4,control:[2,4,5,8,9],convert:9,coord:[2,4,5,7],coordin:[2,4,5,7,9],coords_in:2,copi:[2,7,9],corner:[2,9],corner_kwarg:9,correct:9,correl:3,correspond:[4,9],could:[2,3],count:[2,3,4,8],cours:2,cov:[2,5],cov_al:5,covari:[2,5],cover:2,creat:[2,4,9],creation:[2,9],crimson:2,criteria:4,criterion:4,cube:2,cupi:5,curent:5,current:[0,1,2,3,5,7,9],custom:9,custom_backend:9,d:2,data:[2,3,4,9],deal:2,decreas:2,def:2,default_corner_kwarg:9,defin:[2,8],delai:4,denomin:[4,5],densiti:2,depend:4,describ:[2,4,5,6],descript:2,desir:[2,9],detail:[2,3,5],determ:8,determin:[3,8],deviat:5,diag:2,diagnost:[3,4,9],dict:[2,3,4,5,6,7,9],dict_kei:2,dictionari:[2,3,4,5,6,7,9],diff:2,differ:[2,4,5,7],dimens:[2,3,4,5,7,8,9],dimension:[1,3,5,6],direct:[2,9],directli:[2,3,4],discard:[3,4],discsuss:2,discuss:2,dist:2,distanc:9,distribut:[1,2,4,5],dlogz:3,doc:[0,1,6,8],document:[2,3,9],doe:2,don:4,done:2,dot:2,doubl:[3,4,5,6,7,9],down:[2,5],downward:2,dr:5,dr_max_it:[4,5],dr_move:4,draw:2,driver:4,drop:2,dstndstn:5,dtype:[2,3],due:2,dure:[2,5,7,8,9],e:2,each:[2,3,4,5,7,9],earli:2,easili:9,effect:[2,5],either:[2,4,5,9],els:8,emce:[2,3,4,5],empti:3,end:[2,4],ensebl:2,ensembl:[1,3,5,7],ensemble_pt:2,ensemblesampl:[2,4],ensur:[2,4,6],enter:2,entir:4,entri:[4,5,9],enumer:2,env:[],equal:2,equat:2,equiv:8,equival:[2,4],error:[3,5],eryn:[3,4,5,6,7,8,9],eryn_env:[],estim:[2,3,4],et:5,evalu:[2,3,4,8],evalut:4,everi:[3,4],everyth:[2,4],everywher:2,evid:[2,3],evolut:2,examin:2,exampl:[2,4,5,8,9],except:8,exp:[2,5],expand:3,expect:4,explain:[2,4],explor:[2,4],expon:2,extra:[2,3,4,9],f:[2,4],f_x:2,fact:4,factor:[2,5],fail:[4,5],fall:5,fals:[2,3,4,5,7,9],featur:8,few:2,fig:2,figur:9,file:[3,4,9],filenam:3,fill:[2,4,7,9],fill_dict1:2,fill_dict2:2,fill_dict:[2,9],fill_ind:[2,9],fill_valu:[2,9],fill_zero_leaves_v:4,find:2,first:[2,3,4,5,9],fit:[4,5],fix:[2,9],fix_chang:5,flag:[3,9],flat:[2,3,4],flatten:[2,3,4],flip:5,float64:3,focu:2,follow:[4,8],foreman:5,forest:2,form:[2,4,5],former:7,forward:2,found:[2,8,9],four:4,fp:9,frac:2,fraction:[2,4,5],from:[2,3,4,5,6,7,8,9],full:[2,6,9],fulli:4,fun:2,g:2,gauss:2,gauss_inj_param:2,gauss_out:2,gaussian:[2,5,8],gaussian_flat:2,gaussianmov:[2,5],gener:[2,4,5,6,7,8,9],generate_corn:9,generate_info_pag:9,generate_k_per_temperature_chain:9,generate_k_per_tree_chain:9,generate_leaves_chain:9,generate_parameter_chain:9,generate_parameter_chains_per_temperatur:9,generate_parameter_chains_per_temperature_per_walk:9,generate_plot_info:9,generate_posterior_chain:9,generate_temperature_chain:9,geometr:8,get:[1,3,4,5,6,7],get_a_sampl:[2,3],get_autocorr_thin_burn:3,get_autocorr_tim:[3,4],get_beta:[3,4],get_blob:[3,4],get_chain:[2,3,4],get_evidence_estim:3,get_ind:[3,4],get_info:3,get_last_sampl:[2,3,4],get_log_lik:[2,3,4],get_log_prior:[2,3,4],get_log_prob:[2,7],get_model:4,get_nleav:[2,3,4],get_propos:5,get_stat:4,get_valu:[3,4],gibb:5,gibbs_sampling_leaves_p:5,github:[2,8],give:2,given:[2,3,4,5,7],global:[4,5],go:[2,4],goal:2,goe:5,goodman:5,gradual:2,greater:[4,6,8],group0:4,group1:[2,4],group2:2,group:[2,3,4,6],groupi:4,groupn:4,groups_from_ind:2,groups_in:2,groupsi:4,grow:[2,3],gt:2,h5:3,h5py:3,ha:[2,3,4,5,7,8],half:9,handl:[4,5],happen:8,has_blob:3,hast:[1,2],have:[2,3,4,5,6,8,9],hdf5:3,hdf:1,hdfbackend:[3,4,9],heavili:2,help:[2,3,9],helper:2,her:9,here:2,high:2,higher:2,highest:2,hist:2,hold:[6,9],holder:5,hood:2,how:[2,4],howev:2,html:[2,6],http:[2,6],hyper:2,i:[2,4],ideal:8,ignor:[2,4],illustr:2,imag:2,imagin:2,implement:1,improp:[4,8],improv:2,in_model_swaps_accept:3,includ:[2,3,4,5,6,8],inclus:2,incom:2,inconsist:5,incorrect:[6,7],increas:2,ind:[2,3,4,5,7,8],independ:2,index:[2,3,4,5,6,9],indic:[3,4,5,9],individu:[2,3,4,5,6],indivud:5,inds1:2,inds_:5,inds_c:5,inf:[4,6,8],infam:2,infinit:[2,4],info:[3,4,6,9],info_kei:9,info_pag:9,inform:[2,3,4,5,7,8,9],infrom:9,infti:2,initi:[2,3,4,8,9],initiail:3,initial_st:4,inj_param:2,inject:[2,3],input:[2,3,4,6,7,8,9],insid:6,instal:3,instead:4,insuffici:8,int_:2,integ:[2,4],integr:2,integrated_tim:[3,4],interest:9,intern:4,intimid:2,intract:2,inv:2,invalid:5,invari:5,invcov:2,invers:[2,3,4,8],io:2,isnan:2,isotrop:5,issu:[4,5],iter:[2,3,4,5,8],its:[2,4],jimp:4,jump:[1,2,3,4],jupyt:4,just:[2,3,4],k:9,keep:[3,4],kei:[2,3,4,5,6,7,9],kept:7,keyword:[2,3,4,5,9],know:2,kwarg:[2,3,4,5,9],l:[2,5],l_:2,labe:9,label:[2,9],ladder:[2,3,8],lag:8,lai:6,lambda:2,larger:2,last:[2,3,4,5,9],last_stat:2,later:2,latter:3,leaf:[2,3,4,5,7,9],leafm:5,leav:[2,3,4,5,7,8],left:2,legend:2,legnth:3,len:2,length:[2,3,4,9],less:7,let:2,level:[2,3],lib:[],lightskyblu:2,like:[2,4,8],likeihood:2,likelihood:[2,3,4,5,7],lim:2,limit:2,linalg:2,link:4,linspac:2,list:[3,4,5,6,8,9],live_danger:5,ll:2,ln:2,lnpostfn:7,lnprob:2,load_ext:2,locat:3,log:[2,3,4,5,6,7],log_lik:[2,3,7],log_like_fn:[2,4],log_prior:[2,3,7],log_prob:2,log_prob_fn:2,log_uniform:6,logarithm:4,logl:[5,8],logp:[4,5,8],logpdf:[2,4,5,6],loguniform:6,logz:3,look:[2,8],loop:5,low:[2,5],lower:2,lowest:2,lp:2,lt:2,m:2,mackei:5,made:[4,5],mai:[2,6],main:[2,4],maintain:8,make:[2,5,9],make_ladd:[2,8],mani:[2,4],map:[4,6],mappeduniformdistribut:6,mark:5,mask:5,mathcal:2,matplotlib:2,matrix:[2,5],max:[2,6,9],max_k:5,maximum:[2,3,4,5,6,8],mcmc:[1,3,4,5,7,9],mean:[2,5,6,7],medium:4,memori:[3,4],mesh:5,met:4,metadata:7,metaphor:1,method:[2,4,5,6,9],metropoli:[1,2],mh:1,mhmove:5,michaelkatz:2,mikekatz04:2,min:[2,6],min_k:5,minimum:[3,4,5,6,9],minumum:[3,4],miss:6,mix:2,mode:[3,5],model:[1,3,4,5,7,8,9],model_0:[2,3],model_:4,model_n:[2,3],model_nam:2,modifi:6,moment:2,more:[2,3,4,8],most:[2,3,4],move:[1,2,3,4,8,9],mtrand:4,mu:2,much:[2,3,8],multimod:2,multipl:[1,4,9],multipli:[3,4],multiply_thin:[3,4],multivari:2,multivariate_norm:2,must:[2,3,4,5,8,9],mutlipl:1,n:[3,4],name:[2,3,4,9],nan:[2,3,4,7],natur:4,navig:2,nblob:[3,4,7],nbranch:[2,3,4],ndarrai:[3,4,5,6,7,8,9],ndim:[2,3,4,5,6,7,8,9],ndim_ful:[2,9],ndim_i:2,ndim_max:2,ndims_new:5,ndims_old:5,necessari:[4,5],need:[2,4,5,7],neither:8,never:4,new_stat:5,next:2,ngrow:3,niko:4,nleaf:2,nleav:[3,4,7],nleaves_max:[2,3,4,5,7,8],nleaves_max_i:2,nleaves_min:4,nn:2,nois:2,non:[2,4],none:[2,3,4,5,6,7,8,9],nor:8,notabl:4,note:[2,4],notebook:4,notic:2,notimplementederror:5,now:2,np:[2,3,4,5,6,7,8,9],nsplit:5,nstep:[2,3,4],ntemp:[2,3,4,5,7,8],num:[2,4],num_group:2,num_repeats_in_model:4,num_repeats_rj:4,number:[2,3,4,5,6,7,8,9],numer:[2,5],numpi:[2,4,5],nwalker:[2,3,4,5,7,8],obhect:7,obj:5,object:[1,3,4,5,6,7,8,9],off:4,old:[2,5],old_stat:5,omdel:2,onc:[2,5,8],one:[2,4,5,7,8,9],onefig:9,ones:2,onli:[2,3,4,5,7,8],open:[3,9],oper:[2,8,9],opit:9,option:[3,4,5,6,7,8,9],order:8,org:6,origin:[5,8],ot:4,other:[2,3,4,5],otherwis:[3,4],our:2,out:2,outer:2,output:[2,3,4,6,7,8,9],outsid:[4,6],over:[2,3,4,5,8],overal:2,overridden:9,overwrit:9,own:4,p1:9,p2:9,p:[2,5,9],packag:[],page:9,pair:[3,4,9],paper:[2,8],parallel:[1,4,5],param:9,paramet:[2,3,4,5,6,7,8,9],parameter_transform:[2,9],parameter_transforms1:2,parameter_transforms2:2,params0:4,params1:4,params2:4,params3:4,parent:1,pass:[2,3,4,5,9],path:2,pdf:[6,9],pdfpage:9,peak:2,per:[2,4,8,9],perform:[2,4,8,9],period:[1,4,5],periodic_in:9,periodiccontain:9,phase:2,pi:2,pi_:2,piec:2,place:[5,8],pleas:[2,4],plot:[2,3,4,9],plot_gener:4,plot_iter:4,plot_nam:4,plotcontain:1,plt:2,point:[2,5,6],pool:4,posit:[2,4,5,7,9],possibl:4,post_burn_upd:4,posterior:[2,5,7,8,9],ppf:6,practic:4,prefer:4,preferenti:2,pretti:2,prevent:4,prevent_swap:5,previou:[2,3],primari:[2,5],print:2,prior:[1,2,3,4,5,7,8],priorcontain:[2,4,5,6],priorgener:5,priorgeneraterj:4,priors_in:[2,6],probabilist:2,probabilti:2,probabl:[1,2,3,4,5,7],probe:2,problem:[2,5],process:2,program:3,progress:[2,4],proper:[2,3,4,8],properli:[2,9],properti:[2,3,4,7],propos:[2,3,4,5,8],proposal_branch_nam:5,propto:2,provid:[2,4,5,8,9],provide_group:[2,4],provide_suppliment:4,ptemce:[5,8],purpos:2,put:9,py:[],pyplot:2,python3:[],q:2,quantiti:2,quickli:2,r:3,rais:[2,3,4,5,6,7,8,9],rand:2,randint:2,randn:2,random:[2,4,5,6,7],random_se:5,random_st:[4,7],randomize_split:5,randomli:[4,5],randomst:4,rang:[2,5,6],rate:4,rather:[2,8],ratio:8,reach:[2,8],read:3,read_onli:3,realli:[2,3],reason:2,receiv:3,recent:[3,4],red:1,red_blu:5,redbluemov:5,redredbluemov:5,refer:[2,6,9],reflect:2,regard:4,regular:[1,2],reject:4,relat:[4,7],relev:3,remov:[2,4,5],repeat:[2,4,8],reprent:4,repres:[2,5],request:3,requir:[2,4],research:2,reset:[3,4],reset_arg:3,reset_bas:3,reset_kwarg:3,reshap:2,respect:[4,5],result:4,retriev:[2,4,9],return_error:3,return_gpu:5,return_transpos:[2,9],revers:[1,2,3,4],reversiblejump:5,rewrit:2,right:2,rightarrow:2,righthand:2,rj:3,rj_accept:3,rj_acceptance_fract:4,rj_move:[2,4],rj_swap_acceptance_fract:4,rj_swaps_accept:3,rule:2,run:[2,3,4,7,8,9],run_mcmc:[2,4],rung:[2,3],runtim:2,runtimeerror:[3,5],rv:[2,5,6],s:[2,4,5],s_all:5,safe:8,same:[2,3,4,5],sampl:[2,3,4,5,6,8,9],sampler:[1,3,4,5,7,8],save:[3,4,7,9],save_step:3,scalar:5,scale:[2,5],scipi:[2,6],search:2,second:[2,4,5,9],see:[2,3,4,8,9],seed:[2,5],select:[4,5,8],self:[3,6,9],sens:2,sent:4,sequenc:4,sequenti:5,serial:4,set:[2,4,5,8],set_size_inch:2,setup:[2,4,5],shape:[2,3,4,7],share:5,sharex:2,should:[3,4,7,8,9],show:[2,4],shown:[2,4,9],shuffl:5,side:2,sig1:2,sigma:2,signal:2,signatur:4,silent:4,similar:2,simpl:[2,3],simplest:[2,4],simplic:2,simplifi:2,simultan:[5,7],sin:2,sinc:4,sindarin:2,sine:2,sine_flat:2,sine_inj_param:2,singl:[2,4,9],site:[],size:[2,3,5,6],skip:4,skip_initial_state_check:4,skip_supp_nam:5,slightli:2,small:2,smaller:5,so:[2,3,4,5,8],some:[2,3,4],sourc:[4,5,6],space:[2,3,4,7,8],special:[2,7],specif:[2,3,4,5,7],specifi:[4,5,8],split:5,standard:5,start:[1,9],startup:4,stat:[2,6],state:[1,3,4,5,8],step:[2,3,4,5,7,8],still:7,stop:[2,4,8],stop_adapt:8,stopping_fn:4,stopping_iter:4,storag:[2,3,4],store:[2,3,4],store_missing_leav:3,str:[3,4,9],straight:2,stream:[2,4],streamlin:3,stretch:[2,5],stretchmov:[4,5],string:4,structur:[2,5],stuck:5,stuff:2,sub:5,subclass:[4,5],subplot:2,subset:5,subspac:5,suitabl:4,sum:[2,6],supp:[4,8],suppliment:[2,7],support:4,suppress:5,sure:[2,9],surfac:2,swap:[2,8],swap_acceptance_fract:4,sy:2,symmetr:2,t:[2,3,4,5,8],t_1:2,t_2:2,take:[2,3,4,6],target:2,tc:2,techniqu:[2,3],tem:[],temp:2,temper:[1,4,5,7],temperatur:[2,3,4,5,7,8,9],temperature_control:5,temperature_swap:8,temperaturecontrol:[2,4,5,8],tempering_kwarg:[2,4],temperorarili:9,templat:2,template_gaussian:2,template_sin:2,term:5,terminolog:5,test:[0,1,4,6],than:[2,4,5,6,7,8],thank:5,thei:[2,7],therefor:2,theta:2,thi:[2,3,4,5,6,7,8,9],thin:[2,3,4,9],thin_bi:[2,4],thin_chain_by_ac:9,thing:2,think:[2,5],third:5,those:[2,5],thr:2,three:5,through:[2,5],throughout:2,tild:2,time:[2,3,4,8],tmax:8,todo:[2,4,5],togeth:4,too:7,total:[2,4],total_ndim:2,toward:2,tqdm:4,trace:9,track:3,transform1:2,transform:[1,9],transform_base_paramet:[2,9],transform_contain:2,transformcontain:[1,2],transpos:[2,9],treat:4,tree:[1,4],truth:[2,3],tune:[4,5],tupl:[2,3,4,5,6,9],turn:5,tutori:[2,4],twice:[5,9],two:2,type:[1,3,4,5,6,7,8,9],u:5,uncertainti:[],under:[2,5,8],understand:[2,4],uniform:[2,6],uniform_dist:[2,6],uniformli:5,uniqu:[4,8],unit:[2,3,4],unknown:2,until:[2,8],unus:7,up:[2,5],updat:[4,5,9],update_fn:4,update_iter:4,upward:2,us:[2,3,4,5,6,7,8,9],use_gpu:5,user:[2,3,4,6,8],usual:[3,4],util:[1,4],valeu:3,valu:[2,3,4,5,6,7,9],valueerror:[4,5,6,7,8,9],variabl:4,vec:2,vector:[4,5],verbos:4,veri:2,verifi:[2,8],versa:2,version:2,via:[2,4],vice:2,wa:[2,3,5,7],wai:[2,4],waklker:5,walk:2,walker:[2,3,4,5,7,8,9],want:[2,4,5,8],warm:2,warn:4,wave:2,we:[2,4],wear:5,websit:2,weight:[2,4],well:[2,8],were:[3,4,5],what:2,when:[2,3,4,5,7,8],where:[2,3,4],whether:[3,4,5],which:[2,3,4,5,6,7,8,9],which_plot:9,whose:5,wil:4,willvousden:8,within:[2,3,4,5,7,8],without:6,won:5,wonder:5,wood:2,word:2,work:[2,8],wors:2,would:[2,4,5,8],wrap:9,wrapper:2,write:[2,3],written:4,wrong:7,x0:4,x1:[2,4],x2:2,x:[2,6,8],x_i:2,xi:4,xn:4,xp:[5,9],xs:2,y:[2,9],yield:4,you:[2,3,4,5,8,9],your:2,z:2,zenodo:2,zero:[2,4,6,7],zip:2},titles:["Eryn","Welcome to Eryn\u2019s documentation!","Eryn","Backends","Ensemble","Moves","Priors","State","Parallel Tempering","Utilities"],titleterms:{"5":2,"class":5,The:2,add:2,arrai:2,avail:6,backend:[2,3],basic:2,blue:5,branch:2,contain:[2,6,9],count:[],dimension:2,distribut:6,document:1,e:[],ensembl:[2,4],eryn:[0,1,2],get:2,hast:5,hdf:3,i:[],implement:5,jump:5,leaf:[],mcmc:2,metaphor:2,metropoli:5,mh:5,model:2,move:5,multipl:2,mutlipl:2,object:2,parallel:[2,8],parent:5,period:9,plotcontain:9,prior:6,probabl:6,red:5,regular:3,revers:5,s:1,sampler:2,start:2,state:[2,7],temper:[2,8],transform:2,transformcontain:9,tree:2,tutori:1,type:2,uncertainti:[],util:[2,9],version:[0,1],welcom:1}})