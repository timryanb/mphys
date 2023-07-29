Search.setIndex({"docnames": ["basics/builders", "basics/model_hierarchy", "basics/naming_conventions", "basics/tagged_promotion", "developers/mphys_group", "developers/new_multiphysics_problems", "index", "scenarios/aerodynamic", "scenarios/aerostructural", "scenarios/structural"], "filenames": ["basics/builders.rst", "basics/model_hierarchy.rst", "basics/naming_conventions.rst", "basics/tagged_promotion.rst", "developers/mphys_group.rst", "developers/new_multiphysics_problems.rst", "index.rst", "scenarios/aerodynamic.rst", "scenarios/aerostructural.rst", "scenarios/structural.rst"], "titles": ["Builders", "Model Hierarchy", "Variable Naming Conventions", "Tagged Promotion", "The MphysGroup", "Extending the Scenario Library", "Documentation for MPhys", "Aerodynamic Scenario", "Aerostructural Scenario", "Structural Scenario"], "terms": {"In": [0, 1, 4, 5], "larg": [0, 6], "multiphys": [0, 1, 2, 5], "problem": [0, 1, 2, 5, 6, 8], "creation": 0, "connect": [0, 1, 3], "openmdao": [0, 1, 2, 4, 6], "can": [0, 1, 3, 4, 5], "complic": 0, "time": [0, 5], "consum": 0, "The": [0, 1, 3, 5, 6, 7, 8, 9], "design": [0, 1, 3], "mphy": [0, 1, 2, 3, 4, 5, 8], "i": [0, 1, 2, 4, 5, 6, 7, 8, 9], "base": [0, 4], "class": [0, 1, 4, 5], "order": [0, 6, 7, 8, 9], "reduc": 0, "burden": 0, "user": [0, 1, 3, 5], "most": [0, 5], "assembli": 0, "model": [0, 6], "handl": 0, "set": [0, 1, 2, 4, 5, 6], "helper": [0, 1], "object": [0, 1, 3], "develop": [0, 5], "wish": [0, 3], "integr": 0, "code": [0, 2, 6], "should": [0, 1, 4, 5], "subclass": [0, 1, 4, 5], "implement": [0, 4, 5, 8], "method": [0, 1, 3, 4, 5, 8], "relev": 0, "Not": 0, "all": [0, 5], "need": [0, 1, 3, 4, 5, 7, 8, 9], "For": [0, 1, 8], "exampl": [0, 1, 8, 9], "transfer": [0, 1, 6], "scheme": [0, 1], "mai": 0, "precoupl": 0, "post": [0, 5, 7, 9], "coupl": [0, 2, 3, 4, 6, 7, 8, 9], "subsystem": [0, 1, 3, 4, 5, 7, 8, 9], "scenario": [0, 3, 4], "sourc": [0, 1, 3, 4, 5], "templat": 0, "creat": [0, 1], "becaus": [0, 1, 4, 8], "mpi": [0, 1], "commun": [0, 1], "us": [0, 1, 2, 3, 4, 5, 9], "insid": 0, "known": 0, "when": [0, 2], "instanti": [0, 1, 5], "actual": 0, "solver": [0, 1, 2, 4, 5, 6], "etc": 0, "constructor": 0, "initi": [0, 1], "comm": [0, 1], "thi": [0, 1, 2, 3, 5, 6, 8, 9], "call": [0, 1, 4, 5], "avail": [0, 6], "paramet": [0, 1, 5], "xfer": 0, "instanc": [0, 4], "get_mesh_coordinate_subsystem": 0, "scenario_nam": [0, 3], "none": [0, 1, 5], "contain": [0, 1], "return": [0, 8], "mesh": [0, 1, 3, 8], "coordin": [0, 1, 2, 3, 8], "str": [0, 1, 5], "name": [0, 1, 4, 5, 6], "compon": [0, 1, 3, 5], "group": [0, 4, 6], "ha": [0, 1, 6], "an": [0, 1, 3, 4, 5, 9], "output": [0, 3, 8], "get_coupling_group_subsystem": [0, 5, 8], "add": [0, 1, 4, 5, 6, 8], "couplinggroup": [0, 1, 3, 4, 5], "comput": [0, 1, 3, 8], "multipl": 0, "get_pre_coupling_subsystem": 0, "ad": [0, 1, 4, 5], "each": [0, 1, 5, 6, 8], "befor": [0, 1], "get_post_coupling_subsystem": 0, "after": [0, 1], "get_number_of_nod": 0, "number": [0, 1, 2], "node": [0, 8], "defin": [0, 5], "interfac": [0, 2, 6], "input": [0, 1, 3, 5], "number_of_nod": 0, "int": 0, "domain": 0, "get_ndof": [0, 8], "degre": [0, 8], "freedom": [0, 8], "locat": 0, "ndof": 0, "get_tagged_indic": 0, "tag": [0, 1, 2, 4, 5, 6], "grid": 0, "id": 0, "list": [0, 1], "bodi": 0, "boundari": 0, "integ": 0, "string": 0, "grid_id": 0, "correspond": 0, "given": [0, 1, 6, 8], "pattern": [1, 5], "build": 1, "optim": 1, "level": [1, 3], "differ": [1, 2, 3], "type": [1, 3, 5, 6], "provid": [1, 2, 6], "highest": 1, "consist": 1, "which": [1, 8], "repres": [1, 3, 5], "condit": [1, 5], "analys": 1, "perform": [1, 5], "within": 1, "primari": [1, 8], "builder": [1, 5, 6], "ar": [1, 3, 4, 6, 7, 8, 9], "help": [1, 2, 5], "popul": 1, "from": [1, 3, 4, 5, 8, 9], "promot": [1, 4, 5, 6], "specif": [1, 5], "variabl": [1, 3, 5, 6], "physic": [1, 2, 6, 8], "being": [1, 6], "solv": [1, 2, 6], "That": 1, "modul": [1, 6, 8], "aerodynam": [1, 2, 6, 8], "structur": [1, 2, 6], "potenti": 1, "interpol": 1, "between": 1, "load": [1, 9], "displac": [1, 2], "typic": [1, 8], "associ": [1, 2, 5], "automat": [1, 4], "proper": 1, "have": [1, 4, 5], "default": [1, 4, 5], "nonlinear": [1, 4, 5], "linear": [1, 4, 5, 8], "overwritten": 1, "option": [1, 5, 6], "argument": [1, 5], "mphys_add_scenario": 1, "could": 1, "cruis": 1, "flight": 1, "requir": [1, 2, 5, 6], "determin": 1, "lift": 1, "drag": 1, "ani": [1, 3, 4, 5], "occur": 1, "sonic": 1, "boom": 1, "propag": 1, "flow": [1, 2], "solut": 1, "one": [1, 5], "wai": 1, "doe": [1, 6], "therefor": 1, "put": 1, "converg": 1, "librari": 1, "see": 1, "detail": [1, 6], "about": 1, "standard": [1, 4, 6], "If": [1, 4, 5], "particular": [1, 2, 3, 5], "cover": 1, "new": [1, 4, 6], "mphysgroup": [1, 6], "There": [1, 3], "two": 1, "version": 1, "deriv": 1, "parallelgroup": 1, "both": [1, 3, 8], "function": 1, "lower": 1, "sequenti": 1, "evalu": 1, "top": 1, "setup": [1, 4], "follow": [1, 6], "step": 1, "must": [1, 5, 8], "done": [1, 4], "": [1, 4, 5, 7, 8, 9], "self": [1, 5], "other": [1, 3, 5], "like": [1, 3, 5], "geometri": 1, "addition": 1, "hold": 1, "These": [1, 3, 6], "extra": 1, "kwarg": [1, 4, 5], "extens": [1, 6], "block": [1, 4, 5], "gauss": [1, 4, 5], "seidel": [1, 4, 5], "coupling_nonlinear_solv": 1, "coupling_linear_solv": 1, "nonlinearsolv": 1, "assign": 1, "primal": 1, "linearsolv": 1, "sensit": 1, "mphys_connect_scenario_coordinate_sourc": 1, "disciplin": [1, 3], "A": [1, 4, 5, 7, 8, 9], "aid": 1, "target": 1, "assum": 1, "x_": 1, "0": 1, "api": 1, "rank": 1, "greater": 1, "than": [1, 4], "equal": 1, "simultan": 1, "unlik": 1, "so": 1, "in_multipointparallel": [1, 5], "true": [1, 8], "outsid": [1, 3], "cannot": 1, "directli": [1, 4, 5], "higher": 1, "parallel": [1, 6], "mpi_proc_alloc": 1, "while": [2, 4, 6], "possibl": 2, "up": [2, 6], "same": 2, "prefer": 2, "more": [2, 6], "easili": 2, "interchang": 2, "tabl": 2, "descript": [2, 6], "x_aero0": 2, "mphys_coordin": [2, 3], "surfac": [2, 8], "jig": 2, "shape": 2, "x_aero": 2, "mphys_coupl": [2, 3], "deform": 2, "u_aero": 2, "f_aero": 2, "forc": [2, 8], "t_convect": 2, "temperatur": 2, "convect": 2, "q_convect": 2, "heat": 2, "x_struct0": 2, "u_struct": 2, "state": [2, 3, 8], "vector": [2, 8], "f_struct": 2, "t_conduct": 2, "thermal": 2, "side": 2, "q_conduct": 2, "conduct": 2, "To": [2, 5], "make": [2, 5], "swap": 2, "easier": 2, "also": [2, 5], "share": [2, 3], "noncoupl": 2, "aoa": 2, "mphys_input": [2, 3], "angl": 2, "attack": 2, "pleas": 2, "includ": [2, 5, 8], "unit": 2, "deg": 2, "rad": 2, "declar": [2, 5], "yaw": 2, "mach": 2, "refer": 2, "reynold": 2, "q_inf": 2, "dynam": 2, "pressur": 2, "select": 3, "four": 3, "data": 3, "among": 3, "come": 3, "manual": 3, "input_nam": 3, "onli": [3, 7, 9], "mphys_result": 3, "result": 3, "you": [3, 4, 5], "result_nam": 3, "access": 3, "constraint": [3, 9], "thei": [3, 6], "further": 3, "behind": 3, "curtain": 3, "configur": [3, 4, 5], "autom": [3, 4], "purpos": 4, "mechanan": 4, "mphys_add_subsystem": [4, 5], "still": 4, "add_subsystem": 4, "dure": 4, "phase": [4, 5], "your": [4, 5], "sure": 4, "parent": [4, 5], "super": [4, 5], "import": 4, "understand": 4, "interact": [4, 8], "inherit": 4, "rather": 4, "mphys_group": 4, "some": 4, "appropri": 4, "get": 5, "them": 5, "balanc": 5, "suitabl": 5, "case": [5, 9], "necessari": [5, 6], "do": 5, "coupling_group": 5, "custom": 5, "least": 5, "As": 5, "mode": 5, "oper": 5, "otherwis": 5, "free": 5, "basic": 5, "mphys_add_pre_coupling_subsystem": 5, "mphys_add_post_coupling_subsystem": 5, "analysi": [5, 6], "point": 5, "multipoint": 5, "run": 5, "main": 5, "_mphys_scenario_setup": 5, "mphys_add_post_subsystem": 5, "promotes_input": 5, "promotes_output": 5, "end": 5, "system": 5, "iter": 5, "tupl": [5, 8], "mphys_": 5, "els": 5, "packag": 6, "high": 6, "fidel": 6, "eas": 6, "straightforward": 6, "multidisciplinari": 6, "address": 6, "its": 6, "convent": 6, "absolut": 6, "guidelin": 6, "veri": 6, "gener": [6, 9], "capabl": 6, "howev": 6, "usag": 6, "modular": 6, "across": 6, "technologi": 6, "collabor": 6, "area": 6, "research": 6, "strive": 6, "how": 6, "work": [6, 8], "hierarchi": 6, "describ": 6, "aerostructur": 6, "page": 6, "extend": 6, "index": 6, "search": 6, "scenarioaerodynam": 7, "nonlinearrunonc": [7, 9], "linearrunonc": [7, 9], "execut": [7, 9], "pre": [7, 9], "o": [7, 8, 9], "p": [7, 8, 9], "t": [7, 8, 9], "d": [7, 8, 9], "e": [7, 8, 9], "f": [7, 8, 9], "u": [7, 8, 9], "l": [7, 8, 9], "c": [7, 8, 9], "b": [7, 8, 9], "v": [7, 8, 9], "y": [7, 8, 9], "r": [7, 8, 9], "_": [7, 8, 9], "q": [7, 8, 9], "h": [7, 8, 9], "m": [7, 8, 9], "j": [7, 8, 9], "g": [7, 8, 9], "w": [7, 8, 9], "x": [7, 8, 9], "scenarioaerostructur": 8, "static": [8, 9], "fluid": 8, "1": 8, "2": 8, "3": 8, "project": 8, "4": 8, "geodisp": 8, "undeform": 8, "ti": 8, "togeth": 8, "principl": 8, "virtual": 8, "adjac": 8, "loop": 8, "tranfer": 8, "know": 8, "slice": 8, "full": 8, "shell": 8, "element": 8, "rotat": 8, "addit": 8, "translat": 8, "nonlinearblockg": 8, "linearblockg": 8, "use_aitken": 8, "k": 8, "scenariostructur": 9, "would": 9, "stress": 9}, "objects": {"mphys": [[0, 0, 0, "-", "builder"], [5, 0, 0, "-", "coupling_group"], [4, 0, 0, "-", "mphys_group"], [1, 0, 0, "-", "multipoint"], [5, 0, 0, "-", "scenario"]], "mphys.builder": [[0, 1, 1, "", "Builder"]], "mphys.builder.Builder": [[0, 2, 1, "", "get_coupling_group_subsystem"], [0, 2, 1, "", "get_mesh_coordinate_subsystem"], [0, 2, 1, "", "get_ndof"], [0, 2, 1, "", "get_number_of_nodes"], [0, 2, 1, "", "get_post_coupling_subsystem"], [0, 2, 1, "", "get_pre_coupling_subsystem"], [0, 2, 1, "", "get_tagged_indices"], [0, 2, 1, "", "initialize"]], "mphys.coupling_group": [[5, 1, 1, "", "CouplingGroup"]], "mphys.mphys_group": [[4, 1, 1, "", "MphysGroup"]], "mphys.mphys_group.MphysGroup": [[4, 2, 1, "", "configure"], [4, 2, 1, "", "mphys_add_subsystem"]], "mphys.multipoint": [[1, 1, 1, "", "Multipoint"], [1, 1, 1, "", "MultipointParallel"]], "mphys.multipoint.Multipoint": [[1, 2, 1, "", "mphys_add_scenario"], [1, 2, 1, "", "mphys_connect_scenario_coordinate_source"]], "mphys.multipoint.MultipointParallel": [[1, 2, 1, "", "mphys_add_scenario"]], "mphys.scenario": [[5, 1, 1, "", "Scenario"]], "mphys.scenario.Scenario": [[5, 2, 1, "", "initialize"], [5, 2, 1, "", "mphys_add_post_subsystem"], [5, 2, 1, "", "setup"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"]}, "titleterms": {"builder": [0, 8], "model": 1, "hierarchi": 1, "coupl": [1, 5], "group": [1, 5], "scenario": [1, 5, 6, 7, 8, 9], "multipoint": 1, "multipointparallel": 1, "variabl": [2, 4], "name": 2, "convent": 2, "tag": 3, "promot": 3, "The": 4, "mphysgroup": 4, "manual": 4, "connect": 4, "extend": 5, "librari": [5, 6], "initi": 5, "setup": 5, "document": 6, "mphy": 6, "basic": [6, 7, 8, 9], "multiphys": 6, "singl": 6, "disciplin": 6, "develop": 6, "guid": 6, "indic": 6, "tabl": 6, "aerodynam": 7, "default": [7, 8, 9], "solver": [7, 8, 9], "structuralscenario": 7, "option": [7, 8, 9], "n": [7, 8, 9], "n2": [7, 8, 9], "in_multipointparallel": [7, 8, 9], "geometry_build": [7, 8, 9], "aerostructur": 8, "requir": 8, "load": 8, "displac": 8, "transfer": 8, "structur": [8, 9]}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 58}, "alltitles": {"Builders": [[0, "builders"]], "Model Hierarchy": [[1, "model-hierarchy"]], "Coupling Groups": [[1, "coupling-groups"], [5, "coupling-groups"]], "Scenario Groups": [[1, "scenario-groups"]], "Multipoint Groups": [[1, "multipoint-groups"]], "Multipoint": [[1, "multipoint"]], "MultipointParallel": [[1, "multipointparallel"]], "Variable Naming Conventions": [[2, "variable-naming-conventions"]], "Tagged Promotion": [[3, "tagged-promotion"]], "The MphysGroup": [[4, "the-mphysgroup"]], "Manual Connection of Variables": [[4, "manual-connection-of-variables"]], "Extending the Scenario Library": [[5, "extending-the-scenario-library"]], "Scenarios": [[5, "scenarios"]], "Initialize": [[5, "initialize"]], "Setup": [[5, "setup"]], "Documentation for MPhys": [[6, "documentation-for-mphys"]], "MPhys Basics": [[6, "mphys-basics"], [6, null]], "MPhys Scenario Library": [[6, "mphys-scenario-library"]], "Multiphysics Scenarios": [[6, null]], "Single Discipline Scenarios": [[6, null]], "MPhys Developers Guide": [[6, "mphys-developers-guide"]], "Developers Guide": [[6, null]], "Indices and tables": [[6, "indices-and-tables"]], "Aerodynamic Scenario": [[7, "aerodynamic-scenario"]], "Default Solvers": [[7, "default-solvers"], [8, "default-solvers"], [9, "default-solvers"]], "StructuralScenario Options": [[7, "structuralscenario-options"]], "=": [[7, "id1"], [7, "id2"], [7, "id3"], [7, "id4"], [7, "id5"], [7, "id6"], [7, "id7"], [7, "id8"], [7, "id9"], [7, "id10"], [7, "id11"], [7, "id12"], [7, "id13"], [7, "id14"], [7, "id15"], [7, "id16"], [7, "id17"], [7, "id18"], [7, "id19"], [7, "id20"], [7, "id21"], [7, "id22"], [7, "id23"], [7, "id24"], [7, "id25"], [7, "id26"], [7, "id27"], [7, "id28"], [7, "id29"], [7, "id30"], [7, "id31"], [7, "id32"], [7, "id33"], [7, "id34"], [7, "id35"], [7, "id36"], [7, "id37"], [7, "id38"], [7, "id39"], [7, "id40"], [7, "id41"], [7, "id42"], [7, "id43"], [7, "id44"], [7, "id45"], [7, "id46"], [7, "id47"], [7, "id48"], [7, "id49"], [7, "id50"], [7, "id51"], [7, "id52"], [7, "id53"], [7, "id54"], [7, "id55"], [7, "id56"], [7, "id57"], [7, "id58"], [7, "id59"], [7, "id60"], [7, "id61"], [7, "id62"], [7, "id63"], [7, "id64"], [7, "id65"], [7, "id66"], [7, "id67"], [7, "id68"], [7, "id69"], [7, "id70"], [7, "id71"], [7, "id72"], [7, "id73"], [7, "id74"], [7, "id75"], [7, "id76"], [7, "id77"], [7, "id78"], [7, "id79"], [7, "id80"], [7, "id81"], [7, "id82"], [7, "id83"], [7, "id84"], [7, "id85"], [7, "id86"], [7, "id87"], [7, "id88"], [7, "id89"], [7, "id90"], [7, "id91"], [7, "id92"], [7, "id93"], [7, "id94"], [7, "id95"], [7, "id96"], [7, "id97"], [7, "id98"], [7, "id99"], [7, "id100"], [7, "id101"], [7, "id102"], [7, "id103"], [7, "id104"], [7, "id105"], [7, "id106"], [7, "id107"], [7, "id108"], [7, "id109"], [7, "id110"], [7, "id111"], [7, "id112"], [7, "id113"], [7, "id114"], [7, "id115"], [7, "id116"], [7, "id117"], [7, "id118"], [7, "id119"], [7, "id120"], [7, "id121"], [7, "id122"], [7, "id123"], [7, "id124"], [7, "id125"], [7, "id126"], [7, "id127"], [7, "id128"], [7, "id129"], [7, "id130"], [7, "id131"], [7, "id132"], [7, "id133"], [7, "id134"], [7, "id135"], [7, "id136"], [7, "id137"], [7, "id138"], [7, "id139"], [7, "id140"], [7, "id141"], [7, "id142"], [7, "id143"], [7, "id144"], [7, "id145"], [7, "id146"], [7, "id147"], [7, "id148"], [7, "id149"], [7, "id150"], [7, "id151"], [7, "id152"], [7, "id153"], [7, "id154"], [7, "id155"], [7, "id156"], [7, "id157"], [7, "id158"], [7, "id159"], [7, "id160"], [7, "id161"], [7, "id162"], [7, "id163"], [7, "id164"], [7, "id165"], [7, "id166"], [7, "id167"], [7, "id168"], [7, "id169"], [7, "id170"], [7, "id171"], [7, "id172"], [7, "id173"], [7, "id174"], [7, "id175"], [7, "id176"], [7, "id177"], [7, "id178"], [7, "id179"], [7, "id180"], [7, "id181"], [7, "id182"], [7, "id192"], [7, "id193"], [7, "id194"], [7, "id195"], [7, "id196"], [7, "id197"], [7, "id198"], [7, "id199"], [7, "id200"], [7, "id201"], [7, "id202"], [7, "id203"], [7, "id204"], [7, "id205"], [7, "id206"], [7, "id207"], [7, "id208"], [7, "id209"], [7, "id210"], [7, "id211"], [7, "id212"], [7, "id213"], [7, "id214"], [7, "id215"], [7, "id216"], [7, "id217"], [7, "id218"], [7, "id219"], [7, "id220"], [7, "id221"], [7, "id222"], [7, "id223"], [7, "id224"], [7, "id225"], [7, "id226"], [7, "id227"], [7, "id228"], [7, "id229"], [7, "id230"], [7, "id231"], [7, "id232"], [7, "id233"], [7, "id234"], [7, "id235"], [7, "id236"], [7, "id237"], [7, "id238"], [7, "id239"], [7, "id240"], [7, "id241"], [7, "id242"], [7, "id243"], [7, "id244"], [7, "id245"], [7, "id246"], [7, "id247"], [7, "id248"], [7, "id249"], [7, "id250"], [7, "id251"], [7, "id252"], [7, "id253"], [7, "id254"], [7, "id255"], [7, "id256"], [7, "id257"], [7, "id258"], [7, "id259"], [7, "id260"], [7, "id261"], [7, "id262"], [7, "id263"], [7, "id264"], [7, "id265"], [7, "id266"], [7, "id267"], [7, "id268"], [7, "id269"], [7, "id270"], [7, "id271"], [7, "id272"], [7, "id273"], [7, "id274"], [7, "id275"], [7, "id276"], [7, "id277"], [7, "id278"], [7, "id279"], [7, "id280"], [7, "id281"], [7, "id282"], [8, "id1"], [8, "id2"], [8, "id3"], [8, "id4"], [8, "id5"], [8, "id6"], [8, "id7"], [8, "id8"], [8, "id9"], [8, "id10"], [8, "id11"], [8, "id12"], [8, "id13"], [8, "id14"], [8, "id15"], [8, "id16"], [8, "id17"], [8, "id18"], [8, "id19"], [8, "id20"], [8, "id21"], [8, "id22"], [8, "id23"], [8, "id24"], [8, "id25"], [8, "id26"], [8, "id27"], [8, "id28"], [8, "id29"], [8, "id30"], [8, "id31"], [8, "id32"], [8, "id33"], [8, "id34"], [8, "id35"], [8, "id36"], [8, "id37"], [8, "id38"], [8, "id39"], [8, "id40"], [8, "id41"], [8, "id42"], [8, "id43"], [8, "id44"], [8, "id45"], [8, "id46"], [8, "id47"], [8, "id48"], [8, "id49"], [8, "id50"], [8, "id51"], [8, "id52"], [8, "id53"], [8, "id54"], [8, "id55"], [8, "id56"], [8, "id57"], [8, "id58"], [8, "id59"], [8, "id60"], [8, "id61"], [8, "id62"], [8, "id63"], [8, "id64"], [8, "id65"], [8, "id66"], [8, "id67"], [8, "id68"], [8, "id69"], [8, "id70"], [8, "id71"], [8, "id72"], [8, "id73"], [8, "id74"], [8, "id75"], [8, "id76"], [8, "id77"], [8, "id78"], [8, "id79"], [8, "id80"], [8, "id81"], [8, "id82"], [8, "id83"], [8, "id84"], [8, "id85"], [8, "id86"], [8, "id87"], [8, "id88"], [8, "id89"], [8, "id90"], [8, "id91"], [8, "id92"], [8, "id93"], [8, "id94"], [8, "id95"], [8, "id96"], [8, "id97"], [8, "id98"], [8, "id99"], [8, "id100"], [8, "id101"], [8, "id102"], [8, "id103"], [8, "id104"], [8, "id105"], [8, "id106"], [8, "id107"], [8, "id108"], [8, "id109"], [8, "id110"], [8, "id111"], [8, "id112"], [8, "id113"], [8, "id114"], [8, "id115"], [8, "id116"], [8, "id117"], [8, "id118"], [8, "id119"], [8, "id120"], [8, "id121"], [8, "id122"], [8, "id123"], [8, "id124"], [8, "id125"], [8, "id126"], [8, "id127"], [8, "id128"], [8, "id129"], [8, "id130"], [8, "id131"], [8, "id132"], [8, "id133"], [8, "id134"], [8, "id135"], [8, "id136"], [8, "id137"], [8, "id138"], [8, "id139"], [8, "id140"], [8, "id141"], [8, "id142"], [8, "id143"], [8, "id144"], [8, "id145"], [8, "id146"], [8, "id147"], [8, "id148"], [8, "id149"], [8, "id150"], [8, "id151"], [8, "id152"], [8, "id153"], [8, "id154"], [8, "id155"], [8, "id156"], [8, "id157"], [8, "id158"], [8, "id159"], [8, "id160"], [8, "id161"], [8, "id162"], [8, "id163"], [8, "id164"], [8, "id165"], [8, "id166"], [8, "id167"], [8, "id168"], [8, "id169"], [8, "id170"], [8, "id171"], [8, "id172"], [8, "id173"], [8, "id174"], [8, "id175"], [8, "id176"], [8, "id177"], [8, "id178"], [8, "id179"], [8, "id180"], [8, "id181"], [8, "id182"], [8, "id183"], [8, "id184"], [8, "id185"], [8, "id186"], [8, "id187"], [8, "id188"], [8, "id189"], [8, "id190"], [8, "id191"], [8, "id192"], [8, "id193"], [8, "id194"], [8, "id195"], [8, "id196"], [8, "id197"], [8, "id198"], [8, "id199"], [8, "id200"], [8, "id201"], [8, "id202"], [8, "id203"], [8, "id204"], [8, "id205"], [8, "id206"], [8, "id207"], [8, "id208"], [8, "id209"], [8, "id210"], [8, "id211"], [8, "id212"], [8, "id213"], [8, "id214"], [8, "id215"], [8, "id216"], [8, "id217"], [8, "id218"], [8, "id219"], [8, "id220"], [8, "id221"], [8, "id222"], [8, "id223"], [8, "id224"], [8, "id225"], [8, "id226"], [8, "id227"], [8, "id228"], [8, "id229"], [8, "id230"], [8, "id231"], [8, "id232"], [8, "id233"], [8, "id234"], [8, "id235"], [8, "id236"], [8, "id237"], [8, "id238"], [8, "id239"], [8, "id240"], [8, "id241"], [8, "id242"], [8, "id243"], [8, "id244"], [8, "id245"], [8, "id246"], [8, "id247"], [8, "id248"], [8, "id249"], [8, "id250"], [8, "id273"], [8, "id274"], [8, "id275"], [8, "id276"], [8, "id277"], [8, "id278"], [8, "id279"], [8, "id280"], [8, "id281"], [8, "id282"], [8, "id283"], [8, "id284"], [8, "id285"], [8, "id286"], [8, "id287"], [8, "id288"], [8, "id289"], [8, "id290"], [8, "id291"], [8, "id292"], [8, "id293"], [8, "id294"], [8, "id295"], [8, "id296"], [8, "id297"], [8, "id298"], [8, "id299"], [8, "id300"], [8, "id301"], [8, "id302"], [8, "id303"], [8, "id304"], [8, "id305"], [8, "id306"], [8, "id307"], [8, "id308"], [8, "id309"], [8, "id310"], [8, "id311"], [8, "id312"], [8, "id313"], [8, "id314"], [8, "id315"], [8, "id316"], [8, "id317"], [8, "id318"], [8, "id319"], [8, "id320"], [8, "id321"], [8, "id322"], [8, "id323"], [8, "id324"], [8, "id325"], [8, "id326"], [8, "id327"], [8, "id328"], [8, "id329"], [8, "id330"], [8, "id331"], [8, "id332"], [8, "id333"], [8, "id334"], [8, "id335"], [8, "id336"], [8, "id337"], [8, "id338"], [8, "id339"], [8, "id340"], [8, "id341"], [8, "id342"], [8, "id343"], [8, "id344"], [8, "id345"], [8, "id346"], [8, "id347"], [8, "id348"], [8, "id349"], [8, "id350"], [8, "id351"], [8, "id352"], [8, "id353"], [8, "id354"], [8, "id355"], [8, "id356"], [8, "id357"], [8, "id358"], [8, "id359"], [8, "id360"], [8, "id361"], [8, "id362"], [8, "id363"], [8, "id364"], [8, "id365"], [8, "id366"], [8, "id367"], [8, "id368"], [8, "id369"], [8, "id370"], [8, "id371"], [8, "id372"], [8, "id373"], [8, "id374"], [8, "id375"], [8, "id376"], [8, "id377"], [8, "id378"], [8, "id379"], [8, "id380"], [8, "id381"], [8, "id382"], [8, "id383"], [8, "id384"], [8, "id385"], [8, "id386"], [8, "id387"], [8, "id388"], [8, "id389"], [8, "id390"], [8, "id391"], [8, "id392"], [8, "id393"], [8, "id394"], [8, "id395"], [8, "id396"], [8, "id397"], [9, "id1"], [9, "id2"], [9, "id3"], [9, "id4"], [9, "id5"], [9, "id6"], [9, "id7"], [9, "id8"], [9, "id9"], [9, "id10"], [9, "id11"], [9, "id12"], [9, "id13"], [9, "id14"], [9, "id15"], [9, "id16"], [9, "id17"], [9, "id18"], [9, "id19"], [9, "id20"], [9, "id21"], [9, "id22"], [9, "id23"], [9, "id24"], [9, "id25"], [9, "id26"], [9, "id27"], [9, "id28"], [9, "id29"], [9, "id30"], [9, "id31"], [9, "id32"], [9, "id33"], [9, "id34"], [9, "id35"], [9, "id36"], [9, "id37"], [9, "id38"], [9, "id39"], [9, "id40"], [9, "id41"], [9, "id42"], [9, "id43"], [9, "id44"], [9, "id45"], [9, "id46"], [9, "id47"], [9, "id48"], [9, "id49"], [9, "id50"], [9, "id51"], [9, "id52"], [9, "id53"], [9, "id54"], [9, "id55"], [9, "id56"], [9, "id57"], [9, "id58"], [9, "id59"], [9, "id60"], [9, "id61"], [9, "id62"], [9, "id63"], [9, "id64"], [9, "id65"], [9, "id66"], [9, "id67"], [9, "id68"], [9, "id69"], [9, "id70"], [9, "id71"], [9, "id72"], [9, "id73"], [9, "id74"], [9, "id75"], [9, "id76"], [9, "id77"], [9, "id78"], [9, "id79"], [9, "id80"], [9, "id81"], [9, "id82"], [9, "id83"], [9, "id84"], [9, "id85"], [9, "id86"], [9, "id87"], [9, "id88"], [9, "id89"], [9, "id90"], [9, "id91"], [9, "id92"], [9, "id93"], [9, "id94"], [9, "id95"], [9, "id96"], [9, "id97"], [9, "id98"], [9, "id99"], [9, "id100"], [9, "id101"], [9, "id102"], [9, "id103"], [9, "id104"], [9, "id105"], [9, "id106"], [9, "id107"], [9, "id108"], [9, "id109"], [9, "id110"], [9, "id111"], [9, "id112"], [9, "id113"], [9, "id114"], [9, "id115"], [9, "id116"], [9, "id117"], [9, "id118"], [9, "id119"], [9, "id120"], [9, "id121"], [9, "id122"], [9, "id123"], [9, "id124"], [9, "id125"], [9, "id126"], [9, "id127"], [9, "id128"], [9, "id129"], [9, "id130"], [9, "id131"], [9, "id132"], [9, "id133"], [9, "id134"], [9, "id135"], [9, "id136"], [9, "id137"], [9, "id138"], [9, "id139"], [9, "id140"], [9, "id141"], [9, "id142"], [9, "id143"], [9, "id144"], [9, "id145"], [9, "id146"], [9, "id147"], [9, "id148"], [9, "id149"], [9, "id150"], [9, "id151"], [9, "id152"], [9, "id153"], [9, "id154"], [9, "id155"], [9, "id156"], [9, "id157"], [9, "id158"], [9, "id159"], [9, "id160"], [9, "id161"], [9, "id162"], [9, "id163"], [9, "id164"], [9, "id165"], [9, "id166"], [9, "id167"], [9, "id168"], [9, "id169"], [9, "id170"], [9, "id171"], [9, "id172"], [9, "id173"], [9, "id174"], [9, "id175"], [9, "id176"], [9, "id177"], [9, "id178"], [9, "id179"], [9, "id180"], [9, "id181"], [9, "id182"], [9, "id192"], [9, "id193"], [9, "id194"], [9, "id195"], [9, "id196"], [9, "id197"], [9, "id198"], [9, "id199"], [9, "id200"], [9, "id201"], [9, "id202"], [9, "id203"], [9, "id204"], [9, "id205"], [9, "id206"], [9, "id207"], [9, "id208"], [9, "id209"], [9, "id210"], [9, "id211"], [9, "id212"], [9, "id213"], [9, "id214"], [9, "id215"], [9, "id216"], [9, "id217"], [9, "id218"], [9, "id219"], [9, "id220"], [9, "id221"], [9, "id222"], [9, "id223"], [9, "id224"], [9, "id225"], [9, "id226"], [9, "id227"], [9, "id228"], [9, "id229"], [9, "id230"], [9, "id231"], [9, "id232"], [9, "id233"], [9, "id234"], [9, "id235"], [9, "id236"], [9, "id237"], [9, "id238"], [9, "id239"], [9, "id240"], [9, "id241"], [9, "id242"], [9, "id243"], [9, "id244"], [9, "id245"], [9, "id246"], [9, "id247"], [9, "id248"], [9, "id249"], [9, "id250"], [9, "id251"], [9, "id252"], [9, "id253"], [9, "id254"], [9, "id255"], [9, "id256"], [9, "id257"], [9, "id258"], [9, "id259"], [9, "id260"], [9, "id261"], [9, "id262"], [9, "id263"], [9, "id264"], [9, "id265"], [9, "id266"], [9, "id267"], [9, "id268"], [9, "id269"], [9, "id270"], [9, "id271"], [9, "id272"], [9, "id273"], [9, "id274"], [9, "id275"], [9, "id276"], [9, "id277"], [9, "id278"], [9, "id279"], [9, "id280"], [9, "id281"], [9, "id282"]], "N": [[7, "n"], [7, "id183"], [7, "id185"], [7, "id186"], [7, "id187"], [7, "id188"], [7, "id190"], [8, "n"], [8, "id251"], [8, "id253"], [8, "id254"], [8, "id255"], [8, "id256"], [8, "id257"], [8, "id258"], [8, "id259"], [8, "id260"], [8, "id261"], [8, "id262"], [8, "id264"], [8, "id265"], [8, "id267"], [8, "id268"], [8, "id269"], [8, "id271"], [8, "id272"], [9, "n"], [9, "id184"], [9, "id185"], [9, "id186"], [9, "id188"], [9, "id190"], [9, "id191"]], "[": [[7, "id184"], [7, "id189"], [7, "id191"], [8, "id252"], [8, "id263"], [8, "id266"], [8, "id270"], [9, "id183"], [9, "id187"], [9, "id189"]], "N2:Basic": [[7, "n2-basic"], [9, "n2-basic"]], "N2: in_MultipointParallel": [[7, "n2-in-multipointparallel"], [8, "n2-in-multipointparallel"], [9, "n2-in-multipointparallel"]], "N2: in_MultipointParallel with geometry_builder": [[7, "n2-in-multipointparallel-with-geometry-builder"], [8, "n2-in-multipointparallel-with-geometry-builder"], [9, "n2-in-multipointparallel-with-geometry-builder"]], "Aerostructural Scenario": [[8, "aerostructural-scenario"]], "Builder Requirements": [[8, "builder-requirements"]], "Load and Displacement Transfer Builder": [[8, "load-and-displacement-transfer-builder"]], "Structural Solver Builder": [[8, "structural-solver-builder"]], "Options": [[8, "options"], [9, "options"]], "N2: Basic": [[8, "n2-basic"]], "Structural Scenario": [[9, "structural-scenario"]]}, "indexentries": {"builder (class in mphys.builder)": [[0, "mphys.builder.Builder"]], "get_coupling_group_subsystem() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_coupling_group_subsystem"]], "get_mesh_coordinate_subsystem() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_mesh_coordinate_subsystem"]], "get_ndof() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_ndof"]], "get_number_of_nodes() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_number_of_nodes"]], "get_post_coupling_subsystem() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_post_coupling_subsystem"]], "get_pre_coupling_subsystem() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_pre_coupling_subsystem"]], "get_tagged_indices() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.get_tagged_indices"]], "initialize() (mphys.builder.builder method)": [[0, "mphys.builder.Builder.initialize"]], "module": [[0, "module-mphys.builder"], [1, "module-mphys.multipoint"], [4, "module-mphys.mphys_group"], [5, "module-mphys.coupling_group"], [5, "module-mphys.scenario"]], "mphys.builder": [[0, "module-mphys.builder"]], "multipoint (class in mphys.multipoint)": [[1, "mphys.multipoint.Multipoint"]], "multipointparallel (class in mphys.multipoint)": [[1, "mphys.multipoint.MultipointParallel"]], "mphys.multipoint": [[1, "module-mphys.multipoint"]], "mphys_add_scenario() (mphys.multipoint.multipoint method)": [[1, "mphys.multipoint.Multipoint.mphys_add_scenario"]], "mphys_add_scenario() (mphys.multipoint.multipointparallel method)": [[1, "mphys.multipoint.MultipointParallel.mphys_add_scenario"]], "mphys_connect_scenario_coordinate_source() (mphys.multipoint.multipoint method)": [[1, "mphys.multipoint.Multipoint.mphys_connect_scenario_coordinate_source"]], "mphysgroup (class in mphys.mphys_group)": [[4, "mphys.mphys_group.MphysGroup"]], "configure() (mphys.mphys_group.mphysgroup method)": [[4, "mphys.mphys_group.MphysGroup.configure"]], "mphys.mphys_group": [[4, "module-mphys.mphys_group"]], "mphys_add_subsystem() (mphys.mphys_group.mphysgroup method)": [[4, "mphys.mphys_group.MphysGroup.mphys_add_subsystem"]], "couplinggroup (class in mphys.coupling_group)": [[5, "mphys.coupling_group.CouplingGroup"]], "scenario (class in mphys.scenario)": [[5, "mphys.scenario.Scenario"]], "initialize() (mphys.scenario.scenario method)": [[5, "mphys.scenario.Scenario.initialize"]], "mphys.coupling_group": [[5, "module-mphys.coupling_group"]], "mphys.scenario": [[5, "module-mphys.scenario"]], "mphys_add_post_subsystem() (mphys.scenario.scenario method)": [[5, "mphys.scenario.Scenario.mphys_add_post_subsystem"]], "setup() (mphys.scenario.scenario method)": [[5, "mphys.scenario.Scenario.setup"]]}})