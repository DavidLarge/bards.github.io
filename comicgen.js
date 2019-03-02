var d = document;
var cg = {};
var c = $('#c')[0];
var ctx = c.getContext('2d');
var scene = new RB.Scene(c);
var w = c.width;
var h = c.height;
var fontFamily = "Arial, helvetica";
var pop = new Audio('pop.ogg');
var currentObj = null;


scene.add( scene.rect(w, h, 'white') );
scene.update();

var lib = $('#lib');

var miniUrls = ["Classics-1-mini.jpg", "Classics-2-mini.jpg", "Classics-3-mini.jpg", "Classics-3a-mini.jpg", "Classics-4-mini.jpg", "Classics-5-mini.jpg", "Classics-6-mini.jpg", "Classics-7-mini.jpg", "Classics-8-mini.jpg", "Classics-9-mini.jpg", "Classics-10-mini.jpg", "Classics-11-mini.jpg", "Classics-12-mini.jpg", "Classics-13-mini.jpg", "Classics-14-mini.jpg", "Classics-15-mini.jpg", "Classics-16-mini.jpg", "Classics-17-mini.jpg", "Classics-18-mini.jpg", "Classics-20-mini.jpg", "Classics-21-mini.jpg", "Dunn-1-mini.jpg", "Dunn-2-mini.jpg", "Dunn-3-mini.jpg", "Dunn-4-mini.jpg", "Dunn-5-mini.jpg", "Dunn-6-mini.jpg", "Dunn-7-mini.jpg", "Dunn-8-mini.jpg", "Dunn-9-mini.jpg", "Dunn-10-mini.jpg", "Dunn-11-mini.jpg", "NoFear-1-mini.jpg", "NoFear-2-mini.jpg", "NoFear-3-mini.jpg", "NoFear-4-mini.jpg", "NoFear-5-mini.jpg", "NoFear-6-mini.jpg", "NoFear-7-mini.jpg", "NoFear-8-mini.jpg", "NoFear-9-mini.jpg", "NoFear-10-mini.jpg", "NoFear-11-mini.jpg", "NoFear-12-mini.jpg", "NoFear-13-mini.jpg", "NoFear-14-mini.jpg", "NoFear-15-mini.jpg", "NoFear-16-mini.jpg", "NoFear-17-mini.jpg", "NoFear-18-mini.jpg", "NoFear-19-mini.jpg", "NoFear-20-mini.jpg", "NoFear-21and22-mini.jpg", "NoFear-23-mini.jpg", "NoFear-24-mini.jpg", "NoFear-25-mini.jpg", "NoFear-26-mini.jpg", "NoFear-27-mini.jpg", "NoFear-28-mini.jpg", "NoFear-29-mini.jpg", "NoFear-30-mini.jpg", "NoFear-31-mini.jpg", "NoFear-32-mini.jpg", "NoFear-33-mini.jpg", "NoFear-34-mini.jpg", "NoFear-35-mini.jpg", "NoFear-36-mini.jpg", "NoFear-37-mini.jpg", "NoFear-38-mini.jpg", "NoFear-39-mini.jpg", "NoFear-40-mini.jpg", "NoFear-41-mini.jpg", "NoFear-42-mini.jpg", "NoFear-43-mini.jpg", "NoFear-44-mini.jpg", "NoFear-45-mini.jpg", "NoFear-46-mini.jpg", "NoFear-47-mini.jpg", "NoFear-48-mini.jpg", "NoFear-49-mini.jpg", "NoFear-50-mini.jpg", "NoFear-51-mini.jpg", "NoFear-52-mini.jpg", "NoFear-53-mini.jpg", "NoFear-54-mini.jpg", "NoFear-55and56-mini.jpg", "NoFear-56-mini.jpg", "NoFear-57-mini.jpg", "NoFear-58-mini.jpg", "NoFear-59-mini.jpg", "Sexton-1-mini.jpg", "Sexton-2-mini.jpg", "Sexton-3-mini.jpg", "Sexton-4-mini.jpg", "Sexton-5-mini.jpg", "Sexton-6-mini.jpg", "Sexton-7-mini.jpg", "Sexton-8-mini.jpg", "Sexton-9-mini.jpg", "Sexton-10-mini.jpg", "Sexton-11-mini.jpg", "Sexton-12-mini.jpg", "Sexton-13-mini.jpg", "Sexton-14-mini.jpg", "Sexton-15-mini.jpg", "Sexton-16-mini.jpg", "Sexton-17-mini.jpg", "Sexton-18-mini.jpg", "Sexton-19-mini.jpg"];
var toonUrls = ["Classics-1.png", "Classics-2.png", "Classics-3.png", "Classics-3a.png", "Classics-4.png", "Classics-5.png", "Classics-6.png", "Classics-7.png", "Classics-8.png", "Classics-9.png", "Classics-10.png", "Classics-11.png", "Classics-12.png", "Classics-13.png", "Classics-14.png", "Classics-15.png", "Classics-16.png", "Classics-17.png", "Classics-18.png", "Classics-20.png", "Classics-21.png", "Dunn-1.png", "Dunn-2.png", "Dunn-3.png", "Dunn-4.png", "Dunn-5.png", "Dunn-6.png", "Dunn-7.png", "Dunn-8.png", "Dunn-9.png", "Dunn-10.png", "Dunn-11.png", "NoFear-1.png", "NoFear-2.png", "NoFear-3.png", "NoFear-4.png", "NoFear-5.png", "NoFear-6.png", "NoFear-7.png", "NoFear-8.png", "NoFear-9.png", "NoFear-10.png", "NoFear-11.png", "NoFear-12.png", "NoFear-13.png", "NoFear-14.png", "NoFear-15.png", "NoFear-16.png", "NoFear-17.png", "NoFear-18.png", "NoFear-19.png", "NoFear-20.png", "NoFear-21and22.png", "NoFear-23.png", "NoFear-24.png", "NoFear-25.png", "NoFear-26.png", "NoFear-27.png", "NoFear-28.png", "NoFear-29.png", "NoFear-30.png", "NoFear-31.png", "NoFear-32.png", "NoFear-33.png", "NoFear-34.png", "NoFear-35.png", "NoFear-36.png", "NoFear-37.png", "NoFear-38.png", "NoFear-39.png", "NoFear-40.png", "NoFear-41.png", "NoFear-42.png", "NoFear-43.png", "NoFear-44.png", "NoFear-45.png", "NoFear-46.png", "NoFear-47.png", "NoFear-48.png", "NoFear-49.png", "NoFear-50.png", "NoFear-51.png", "NoFear-52.png", "NoFear-53.png", "NoFear-54.png", "NoFear-55and56.png", "NoFear-56.png", "NoFear-57.png", "NoFear-58.png", "NoFear-59.png", "Sexton-1.png", "Sexton-2.png", "Sexton-3.png", "Sexton-4.png", "Sexton-5.png", "Sexton-6.png", "Sexton-7.png", "Sexton-8.png", "Sexton-9.png", "Sexton-10.png", "Sexton-11.png", "Sexton-12.png", "Sexton-13.png", "Sexton-14.png", "Sexton-15.png", "Sexton-16.png", "Sexton-17.png", "Sexton-18.png", "Sexton-19.png"];

var libtext = $('#libtext');
var minitextUrls = ["narrative.png", "balao.png", "thought.png", "003-q1.png", "003-q2.png", "003-f1.png", "004-q1.png", "004-q2.png", "004-f1.png", "gap.png", "gap.png", "005-f1.png", "006-q1.png", "006-q2.png", "006-f1.png", "008-q1.png", "008-q2.png", "008-f1.png", "gap.png",  "009-q2.png", "009-f1.png", "gap.png", "010-q2.png", "010-f1.png", "gap.png", "011-q2.png", "011-f1.png", "gap.png", "012-q2.png", "012-f1.png", "013-q1.png", "013-q2.png", "013-f1.png", "014-q1.png", "014-q2.png", "014-f1.png", "gap.png", "015-q2.png", "015-f1.png", "gap.png", "016-q2.png", "016-f1.png", "gap.png", "017-q2.png", "017-f1.png", "gap.png", "018-q2.png", "018-f1.png", "gap.png", "019-q2.png", "019-f1.png", "gap.png", "020-q2.png", "020-f1.png", "gap.png", "021-q2.png", "021-f1.png", "gap.png", "022-q2.png", "022-f1.png", "023-q1.png", "023-q2.png", "023-f1.png", "024-q1.png", "024-q2.png", "024-f1.png", "025-q1.png", "025-q2.png", "025-f1.png", "028-q1.png", "028-q2.png", "028-f1.png", "029-q1.png", "029-q2.png", "029-f1.png", "gap.png", "030-q2.png", "030-f1.png", "031-q1.png", "031-q2.png", "031-f1.png", "032-q1.png", "032-q2.png", "032-f1.png", "033-q1.png", "033-q2.png", "033-f1.png", "gap.png", "034-q2.png", "034-f1.png", "035-q1.png", "035-q2.png", "035-f1.png", "036-q1.png", "036-q2.png", "036-f1.png", "037-q1.png", "037-q2.png", "037-f1.png", "038-q1.png", "038-q2.png", "038-f1.png", "gap.png", "039-q2.png", "039-f1.png", "040-q1.png", "040-q2.png", "040-f1.png", "041-q1.png", "041-q2.png", "041-f1.png", "042-q1.png", "042-q2.png", "042-f1.png", "043-q1.png", "043-q2.png", "043-f1.png", "044-q1.png", "044-q2.png", "044-f1.png", "045-q1.png", "045-q2.png", "045-f1.png", "047-q1.png", "047-q2.png", "047-f1.png", "048-q1.png", "048-q2.png", "048-f1.png", "049-q1.png", "049-q2.png", "049-f1.png", "050-q1.png", "050-q2.png", "050-f1.png", "051-q1.png", "051-q2.png", "051-f1.png", "052-q1.png", "052-q2.png", "052-f1.png", "053-q1.png", "053-q2.png", "053-f1.png", "055-q1.png", "055-q2.png", "055-f1.png", "056-q1.png", "056-q2.png", "056-f1.png", "057-q1.png", "057-q2.png", "057-f1.png", "058-q1.png", "058-q2.png", "058-f1.png", "059-q1.png", "059-q2.png", "059-f1.png", "060-q1.png", "060-q2.png", "060-f1.png", "061-q1.png", "061-q2.png", "061-f1.png", "064-q1.png", "064-q2.png", "064-f1.png", "065-q1.png", "065-q2.png", "065-f1.png", "066-q1.png", "066-q2.png", "066-f1.png", "067-q1.png", "067-q2.png", "067-f1.png", "gap.png", "068-q2.png", "068-f1.png", "069-q1.png", "069-q2.png", "069-f1.png", "070-q1.png", "070-q2.png", "070-f1.png", "gap.png", "072-q2.png", "072-f1.png", "073-q1.png", "073-q2.png", "073-f1.png", "074-q1.png", "074-q2.png", "074-f1.png", "075-q1.png", "075-q2.png", "075-f1.png", "078-q1.png", "078-q2.png", "078-f1.png", "079-q1.png", "079-q2.png", "079-f1.png", "081-q1.png", "081-q2.png", "081-f1.png", "gap.png", "082-q2.png", "082-f1.png", "084-q1.png", "084-q2.png", "084-f1.png", "085-q1.png", "085-q2.png", "085-f1.png", "087-q1.png", "087-q2.png", "087-f1.png", "088-q1.png", "088-q2.png", "088-f1.png", "089-q1.png", "089-q2.png", "089-f1.png", "gap.png", "090-q2.png", "090-f1.png", "091-q1.png", "091-q2.png", "091-f1.png", "092-q1.png", "092-q2.png", "092-f1.png", "095-q1.png", "095-q2.png", "095-f1.png", "096-q1.png", "gap.png", "gap.png", "097-q1.png", "097-q2.png", "097-f1.png", "098-q1.png", "098-q2.png", "098-f1.png", "099-q1.png", "099-q2.png", "099-f1.png", "100-q1.png", "100-q2.png", "100-f1.png", "101-q1.png", "gap.png", "gap.png", "102-q1.png", "102-q2.png", "102-f1.png", "gap.png", "105-q2.png", "105-f1.png", "106-q1.png", "106-q2.png", "106-f1.png", "107-q1.png", "107-q2.png", "107-f1.png", "109-q1.png", "109-q2.png", "109-f1.png", "110-q1.png", "110-q2.png", "110-f1.png", "111-q1.png", "111-q2.png", "111-f1.png", "112-q1.png", "112-q2.png", "112-f1.png", "113-q1.png", "113-q2.png", "113-f1.png", "114-q1.png", "114-q2.png", "114-f1.png", "115-q1.png", "115-q2.png", "115-f1.png", "117-q1.png", "117-q2.png", "117-f1.png", "118-q1.png", "118-q2.png", "118-f1.png", "119-q1.png", "119-q2.png", "119-f1.png", "120-q1.png", "120-q2.png", "120-f1.png", "121-q1.png", "121-q2.png", "121-f1.png", "122-q1.png", "122-q2.png", "122-f1.png", "125-q1.png", "125-q2.png", "125-f1.png", "126-q1.png", "126-q2.png", "126-f1.png", "127-q1.png", "127-q2.png", "127-f1.png", "128-q1.png", "128-q2.png", "128-f1.png", "129-q1.png", "129-q2.png", "129-f1.png", "130-q1.png", "130-q2.png", "130-f1.png", "131-q1.png", "131-q2.png", "131-f1.png", "132-q1.png", "132-q2.png", "132-f1.png", "133-q1.png", "133-q2.png", "133-f1.png", "134-q1.png", "134-q2.png", "134-f1.png", "135-q1.png", "135-q2.png", "135-f1.png", "136-q1.png", "136-q2.png", "136-f1.png", "137-q1.png", "137-q2.png", "137-f1.png", "138-q1.png", "138-q2.png", "138-f1.png", "139-q1.png", "139-q2.png", "139-f1.png", "140-q1.png", "140-q2.png", "140-f1.png", "141-q1.png", "141-q2.png", "141-f1.png", "142-q1.png", "142-q2.png", "142-f1.png", "144-q1.png", "144-q2.png", "144-f1.png", "145-q1.png", "145-q2.png", "145-f1.png", "146-q1.png", "146-q2.png", "146-f1.png", "gap.png", "147-q2.png", "147-f1.png", "148-q1.png", "148-q2.png", "148-f1.png", "149-q1.png", "149-q2.png", "149-f1.png", "150-q1.png", "150-q2.png", "150-f1.png", "151-q1.png", "151-q2.png", "151-f1.png", "152-q1.png", "152-q2.png", "152-f1.png", "153-q1.png", "153-q2.png", "153-f1.png", "154-q1.png", "154-q2.png", "154-f1.png", "155-q1.png", "155-q2.png", "155-f1.png", "156-q1.png", "156-q2.png", "156-f1.png", "157-q1.png", "157-q2.png", "157-f1.png", "158-q1.png", "158-q2.png", "158-f1.png", "159-q1.png", "159-q2.png", "159-f1.png", "160-q1.png", "160-q2.png", "160-f1.png", "161-q1.png", "161-q2.png", "161-f1.png", "162-q1.png", "162-q2.png", "162-f1.png", "gap.png", "163-q2.png", "163-f1.png", "gap.png", "164-q2.png", "164-f1.png", "gap.png", "165-q2.png", "165-f1.png", "gap.png", "166-q2.png", "166-f1.png", "167-q1.png", "167-q2.png", "167-f1.png", "168-q1.png", "168-q2.png", "168-f1.png", "169-q1.png", "169-q2.png", "169-f1.png", "170-q1.png", "170-q2.png", "170-f1.png", "171-q1.png", "171-q2.png", "171-f1.png", "172-q1.png", "172-q2.png", "172-f1.png", "173-q1.png", "173-q2.png", "173-f1.png", "174-q1.png", "174-q2.png", "174-f1.png", "175-q1.png", "175-q2.png", "175-f1.png", "gap.png", "176-q2.png", "176-f1.png", "gap.png", "177-q2.png", "177-f1.png", "gap.png", "178-q2.png", "178-f1.png", "gap.png", "179-q2.png", "179-f1.png", "180-q1.png", "180-q2.png", "180-f1.png", "181-q1.png", "181-q2.png", "181-f1.png", "gap.png", "182-q2.png", "182-f1.png", "gap.png", "183-q2.png", "183-f1.png", "gap.png", "184-q2.png", "184-f1.png", "gap.png", "186-q2.png", "gap.png", "gap.png", "187-q2.png", "gap.png", "gap.png", "188-q2.png", "gap.png", "gap.png", "189-q2.png", "gap.png", "gap.png", "190-q2.png", "gap.png", "gap.png", "191-q2.png", "gap.png", "gap.png", "192-q2.png", "gap.png", "gap.png", "193-q2.png", "gap.png", "gap.png", "194-q2.png", "gap.png", "gap.png", "195-q2.png", "gap.png", "gap.png", "196-q2.png", "gap.png", "gap.png", "197-q2.png", "gap.png", "gap.png", "198-q2.png", "gap.png", "gap.png", "199-q2.png", "gap.png", "gap.png", "200-q2.png", "gap.png", "gap.png", "201-q2.png", "gap.png", "202-q1.png", "202-q2.png", "202-f1.png", "203-q1.png", "203-q2.png", "203-f1.png", "204-q1.png", "204-q2.png", "204-f1.png", "205-q1.png", "205-q2.png", "205-f1.png", "206-q1.png", "206-q2.png", "206-f1.png", "207-q1.png", "207-q2.png", "207-f1.png", "gap.png", "208-q2.png", "gap.png", "gap.png", "209-q2.png", "209-f1.png", "gap.png", "210-q2.png", "210-f1.png", "gap.png", "211-q2.png", "211-f1.png", "212-q1.png", "212-q2.png", "212-f1.png", "213-q1.png", "213-q2.png", "213-f1.png", "214-q1.png", "214-q2.png", "214-f1.png", "215-q1.png", "215-q2.png", "215-f1.png", "216-q1.png", "216-q2.png", "216-f1.png", "217-q1.png", "217-q2.png", "217-f1.png", "218-q1.png", "218-q2.png", "218-f1.png", "219-q1.png", "219-q2.png", "219-f1.png", "220-q1.png", "220-q2.png", "220-f1.png", "gap.png", "223-q2.png", "gap.png", "224-q1.png", "224-q2.png", "224-f1.png", "225-q1.png", "225-q2.png", "225-f1.png", "226-q1.png", "226-q2.png", "226-f1.png", "227-q1.png", "gap.png", "gap.png", "228-q1.png", "228-q2.png", "228-f1.png", "gap.png", "229-q2.png", "229-f1.png", "gap.png", "232-q2.png", "232-f1.png", "233-q1.png", "233-q2.png", "233-f1.png", "234-q1.png", "gap.png", "gap.png", "235-q1.png", "235-q2.png", "235-f1.png", "237-q1.png", "237-q2.png", "237-f1.png", "gap.png", "gap.png", "238-f1.png", "239-q1.png", "239-q2.png", "239-f1.png", "240-q1.png", "240-q2.png", "240-f1.png", "241-q1.png", "241-q2.png", "241-f1.png", "242-q1.png", "242-q2.png", "242-f1.png", "243-q1.png", "243-q2.png", "243-f1.png", "244-q1.png", "244-q2.png", "244-f1.png", "245-q1.png", "245-q2.png", "245-f1.png", "246-q1.png", "246-q2.png", "246-f1.png", "247-q1.png", "247-q2.png", "247-f1.png", "248-q1.png", "248-q2.png", "248-f1.png", "249-q1.png", "249-q2.png", "249-f1.png", "250-q1.png", "250-q2.png", "250-f1.png", "251-q1.png", "251-q2.png", "251-f1.png", "252-q1.png", "252-q2.png", "252-f1.png", "253-q1.png", "253-q2.png", "253-f1.png", "254-q1.png", "254-q2.png", "254-f1.png", "255-q1.png", "255-q2.png", "255-f1.png", "256-q1.png", "256-q2.png", "256-f1.png", "257-q1.png", "257-q2.png", "257-f1.png", "258-q1.png", "258-q2.png", "258-f1.png", "259-q1.png", "259-q2.png", "259-f1.png", "260-q1.png", "260-q2.png", "260-f1.png", "261-q1.png", "261-q2.png", "261-f1.png", "262-q1.png", "262-q2.png", "262-f1.png", "263-q1.png", "263-q2.png", "263-f1.png", "264-q1.png", "264-q2.png", "264-f1.png", "265-q1.png", "265-q2.png", "265-f1.png", "266-q1.png", "266-q2.png", "266-f1.png", "267-q1.png", "267-q2.png", "267-f1.png", "268-q1.png", "268-q2.png", "268-f1.png", "269-q1.png", "269-q2.png", "269-f1.png", "270-q1.png", "270-q2.png", "270-f1.png", "271-q1.png", "271-q2.png", "271-f1.png", "272-q1.png", "272-q2.png", "272-f1.png", "273-q1.png", "273-q2.png", "273-f1.png", "274-q1.png", "274-q2.png", "274-f1.png", "275-q1.png", "275-q2.png", "275-f1.png", "276-q1.png", "276-q2.png", "276-f1.png", "277-q1.png", "277-q2.png", "277-f1.png", "278-q1.png", "278-q2.png", "278-f1.png", "279-q1.png", "279-q2.png", "279-f1.png", "280-q1.png", "280-q2.png", "280-f1.png", "281-q1.png", "281-q2.png", "281-f1.png", "282-q1.png", "282-q2.png", "282-f1.png", "283-q1.png", "283-q2.png", "283-f1.png", "284-q1.png", "284-q2.png", "284-f1.png", "285-q1.png", "285-q2.png", "285-f1.png", "286-q1.png", "286-q2.png", "286-f1.png", "287-q1.png", "287-q2.png", "287-f1.png", "288-q1.png", "288-q2.png", "288-f1.png", "291-q1.png", "291-q2.png", "291-f1.png", "292-q1.png", "292-q2.png", "292-f1.png", "293-q1.png", "293-q2.png", "293-f1.png", "gap.png", "294-q2.png", "294-f1.png"];
var textUrls = ["narrative.png", "balao.png", "thought.png", "003-q1.png", "003-q2.png", "003-f1.png", "004-q1.png", "004-q2.png", "004-f1.png", "gap2.png", "gap2.png", "005-f1.png", "006-q1.png", "006-q2.png", "006-f1.png", "008-q1.png", "008-q2.png", "008-f1.png", "gap2.png",  "009-q2.png", "009-f1.png", "gap2.png", "010-q2.png", "010-f1.png", "gap2.png", "011-q2.png", "011-f1.png", "gap2.png", "012-q2.png", "012-f1.png", "013-q1.png", "013-q2.png", "013-f1.png", "014-q1.png", "014-q2.png", "014-f1.png", "gap2.png", "015-q2.png", "015-f1.png", "gap2.png", "016-q2.png", "016-f1.png", "gap2.png", "017-q2.png", "017-f1.png", "gap2.png", "018-q2.png", "018-f1.png", "gap2.png", "019-q2.png", "019-f1.png", "gap2.png", "020-q2.png", "020-f1.png", "gap2.png", "021-q2.png", "021-f1.png", "gap2.png", "022-q2.png", "022-f1.png", "023-q1.png", "023-q2.png", "023-f1.png", "024-q1.png", "024-q2.png", "024-f1.png", "025-q1.png", "025-q2.png", "025-f1.png", "028-q1.png", "028-q2.png", "028-f1.png", "029-q1.png", "029-q2.png", "029-f1.png", "gap2.png", "030-q2.png", "030-f1.png", "031-q1.png", "031-q2.png", "031-f1.png", "032-q1.png", "032-q2.png", "032-f1.png", "033-q1.png", "033-q2.png", "033-f1.png", "gap2.png", "034-q2.png", "034-f1.png", "035-q1.png", "035-q2.png", "035-f1.png", "036-q1.png", "036-q2.png", "036-f1.png", "037-q1.png", "037-q2.png", "037-f1.png", "038-q1.png", "038-q2.png", "038-f1.png", "gap2.png", "039-q2.png", "039-f1.png", "040-q1.png", "040-q2.png", "040-f1.png", "041-q1.png", "041-q2.png", "041-f1.png", "042-q1.png", "042-q2.png", "042-f1.png", "043-q1.png", "043-q2.png", "043-f1.png", "044-q1.png", "044-q2.png", "044-f1.png", "045-q1.png", "045-q2.png", "045-f1.png", "047-q1.png", "047-q2.png", "047-f1.png", "048-q1.png", "048-q2.png", "048-f1.png", "049-q1.png", "049-q2.png", "049-f1.png", "050-q1.png", "050-q2.png", "050-f1.png", "051-q1.png", "051-q2.png", "051-f1.png", "052-q1.png", "052-q2.png", "052-f1.png", "053-q1.png", "053-q2.png", "053-f1.png", "055-q1.png", "055-q2.png", "055-f1.png", "056-q1.png", "056-q2.png", "056-f1.png", "057-q1.png", "057-q2.png", "057-f1.png", "058-q1.png", "058-q2.png", "058-f1.png", "059-q1.png", "059-q2.png", "059-f1.png", "060-q1.png", "060-q2.png", "060-f1.png", "061-q1.png", "061-q2.png", "061-f1.png", "064-q1.png", "064-q2.png", "064-f1.png", "065-q1.png", "065-q2.png", "065-f1.png", "066-q1.png", "066-q2.png", "066-f1.png", "067-q1.png", "067-q2.png", "067-f1.png", "gap2.png", "068-q2.png", "068-f1.png", "069-q1.png", "069-q2.png", "069-f1.png", "070-q1.png", "070-q2.png", "070-f1.png", "gap2.png", "072-q2.png", "072-f1.png", "073-q1.png", "073-q2.png", "073-f1.png", "074-q1.png", "074-q2.png", "074-f1.png", "075-q1.png", "075-q2.png", "075-f1.png", "078-q1.png", "078-q2.png", "078-f1.png", "079-q1.png", "079-q2.png", "079-f1.png", "081-q1.png", "081-q2.png", "081-f1.png", "gap2.png", "082-q2.png", "082-f1.png", "084-q1.png", "084-q2.png", "084-f1.png", "085-q1.png", "085-q2.png", "085-f1.png", "087-q1.png", "087-q2.png", "087-f1.png", "088-q1.png", "088-q2.png", "088-f1.png", "089-q1.png", "089-q2.png", "089-f1.png", "gap2.png", "090-q2.png", "090-f1.png", "091-q1.png", "091-q2.png", "091-f1.png", "092-q1.png", "092-q2.png", "092-f1.png", "095-q1.png", "095-q2.png", "095-f1.png", "096-q1.png", "gap2.png", "gap2.png", "097-q1.png", "097-q2.png", "097-f1.png", "098-q1.png", "098-q2.png", "098-f1.png", "099-q1.png", "099-q2.png", "099-f1.png", "100-q1.png", "100-q2.png", "100-f1.png", "101-q1.png", "gap2.png", "gap2.png", "102-q1.png", "102-q2.png", "102-f1.png", "gap2.png", "105-q2.png", "105-f1.png", "106-q1.png", "106-q2.png", "106-f1.png", "107-q1.png", "107-q2.png", "107-f1.png", "109-q1.png", "109-q2.png", "109-f1.png", "110-q1.png", "110-q2.png", "110-f1.png", "111-q1.png", "111-q2.png", "111-f1.png", "112-q1.png", "112-q2.png", "112-f1.png", "113-q1.png", "113-q2.png", "113-f1.png", "114-q1.png", "114-q2.png", "114-f1.png", "115-q1.png", "115-q2.png", "115-f1.png", "117-q1.png", "117-q2.png", "117-f1.png", "118-q1.png", "118-q2.png", "118-f1.png", "119-q1.png", "119-q2.png", "119-f1.png", "120-q1.png", "120-q2.png", "120-f1.png", "121-q1.png", "121-q2.png", "121-f1.png", "122-q1.png", "122-q2.png", "122-f1.png", "125-q1.png", "125-q2.png", "125-f1.png", "126-q1.png", "126-q2.png", "126-f1.png", "127-q1.png", "127-q2.png", "127-f1.png", "128-q1.png", "128-q2.png", "128-f1.png", "129-q1.png", "129-q2.png", "129-f1.png", "130-q1.png", "130-q2.png", "130-f1.png", "131-q1.png", "131-q2.png", "131-f1.png", "132-q1.png", "132-q2.png", "132-f1.png", "133-q1.png", "133-q2.png", "133-f1.png", "134-q1.png", "134-q2.png", "134-f1.png", "135-q1.png", "135-q2.png", "135-f1.png", "136-q1.png", "136-q2.png", "136-f1.png", "137-q1.png", "137-q2.png", "137-f1.png", "138-q1.png", "138-q2.png", "138-f1.png", "139-q1.png", "139-q2.png", "139-f1.png", "140-q1.png", "140-q2.png", "140-f1.png", "141-q1.png", "141-q2.png", "141-f1.png", "142-q1.png", "142-q2.png", "142-f1.png", "144-q1.png", "144-q2.png", "144-f1.png", "145-q1.png", "145-q2.png", "145-f1.png", "146-q1.png", "146-q2.png", "146-f1.png", "gap2.png", "147-q2.png", "147-f1.png", "148-q1.png", "148-q2.png", "148-f1.png", "149-q1.png", "149-q2.png", "149-f1.png", "150-q1.png", "150-q2.png", "150-f1.png", "151-q1.png", "151-q2.png", "151-f1.png", "152-q1.png", "152-q2.png", "152-f1.png", "153-q1.png", "153-q2.png", "153-f1.png", "154-q1.png", "154-q2.png", "154-f1.png", "155-q1.png", "155-q2.png", "155-f1.png", "156-q1.png", "156-q2.png", "156-f1.png", "157-q1.png", "157-q2.png", "157-f1.png", "158-q1.png", "158-q2.png", "158-f1.png", "159-q1.png", "159-q2.png", "159-f1.png", "160-q1.png", "160-q2.png", "160-f1.png", "161-q1.png", "161-q2.png", "161-f1.png", "162-q1.png", "162-q2.png", "162-f1.png", "gap2.png", "163-q2.png", "163-f1.png", "gap2.png", "164-q2.png", "164-f1.png", "gap2.png", "165-q2.png", "165-f1.png", "gap2.png", "166-q2.png", "166-f1.png", "167-q1.png", "167-q2.png", "167-f1.png", "168-q1.png", "168-q2.png", "168-f1.png", "169-q1.png", "169-q2.png", "169-f1.png", "170-q1.png", "170-q2.png", "170-f1.png", "171-q1.png", "171-q2.png", "171-f1.png", "172-q1.png", "172-q2.png", "172-f1.png", "173-q1.png", "173-q2.png", "173-f1.png", "174-q1.png", "174-q2.png", "174-f1.png", "175-q1.png", "175-q2.png", "175-f1.png", "gap2.png", "176-q2.png", "176-f1.png", "gap2.png", "177-q2.png", "177-f1.png", "gap2.png", "178-q2.png", "178-f1.png", "gap2.png", "179-q2.png", "179-f1.png", "180-q1.png", "180-q2.png", "180-f1.png", "181-q1.png", "181-q2.png", "181-f1.png", "gap2.png", "182-q2.png", "182-f1.png", "gap2.png", "183-q2.png", "183-f1.png", "gap2.png", "184-q2.png", "184-f1.png", "gap2.png", "186-q2.png", "gap2.png", "gap2.png", "187-q2.png", "gap2.png", "gap2.png", "188-q2.png", "gap2.png", "gap2.png", "189-q2.png", "gap2.png", "gap2.png", "190-q2.png", "gap2.png", "gap2.png", "191-q2.png", "gap2.png", "gap2.png", "192-q2.png", "gap2.png", "gap2.png", "193-q2.png", "gap2.png", "gap2.png", "194-q2.png", "gap2.png", "gap2.png", "195-q2.png", "gap2.png", "gap2.png", "196-q2.png", "gap2.png", "gap2.png", "197-q2.png", "gap2.png", "gap2.png", "198-q2.png", "gap2.png", "gap2.png", "199-q2.png", "gap2.png", "gap2.png", "200-q2.png", "gap2.png", "gap2.png", "201-q2.png", "gap2.png", "202-q1.png", "202-q2.png", "202-f1.png", "203-q1.png", "203-q2.png", "203-f1.png", "204-q1.png", "204-q2.png", "204-f1.png", "205-q1.png", "205-q2.png", "205-f1.png", "206-q1.png", "206-q2.png", "206-f1.png", "207-q1.png", "207-q2.png", "207-f1.png", "gap2.png", "208-q2.png", "gap2.png", "gap2.png", "209-q2.png", "209-f1.png", "gap2.png", "210-q2.png", "210-f1.png", "gap2.png", "211-q2.png", "211-f1.png", "212-q1.png", "212-q2.png", "212-f1.png", "213-q1.png", "213-q2.png", "213-f1.png", "214-q1.png", "214-q2.png", "214-f1.png", "215-q1.png", "215-q2.png", "215-f1.png", "216-q1.png", "216-q2.png", "216-f1.png", "217-q1.png", "217-q2.png", "217-f1.png", "218-q1.png", "218-q2.png", "218-f1.png", "219-q1.png", "219-q2.png", "219-f1.png", "220-q1.png", "220-q2.png", "220-f1.png", "gap2.png", "223-q2.png", "gap2.png", "224-q1.png", "224-q2.png", "224-f1.png", "225-q1.png", "225-q2.png", "225-f1.png", "226-q1.png", "226-q2.png", "226-f1.png", "227-q1.png", "gap2.png", "gap2.png", "228-q1.png", "228-q2.png", "228-f1.png", "gap2.png", "229-q2.png", "229-f1.png", "gap2.png", "232-q2.png", "232-f1.png", "233-q1.png", "233-q2.png", "233-f1.png", "234-q1.png", "gap2.png", "gap2.png", "235-q1.png", "235-q2.png", "235-f1.png", "237-q1.png", "237-q2.png", "237-f1.png", "gap2.png", "gap2.png", "238-f1.png", "239-q1.png", "239-q2.png", "239-f1.png", "240-q1.png", "240-q2.png", "240-f1.png", "241-q1.png", "241-q2.png", "241-f1.png", "242-q1.png", "242-q2.png", "242-f1.png", "243-q1.png", "243-q2.png", "243-f1.png", "244-q1.png", "244-q2.png", "244-f1.png", "245-q1.png", "245-q2.png", "245-f1.png", "246-q1.png", "246-q2.png", "246-f1.png", "247-q1.png", "247-q2.png", "247-f1.png", "248-q1.png", "248-q2.png", "248-f1.png", "249-q1.png", "249-q2.png", "249-f1.png", "250-q1.png", "250-q2.png", "250-f1.png", "251-q1.png", "251-q2.png", "251-f1.png", "252-q1.png", "252-q2.png", "252-f1.png", "253-q1.png", "253-q2.png", "253-f1.png", "254-q1.png", "254-q2.png", "254-f1.png", "255-q1.png", "255-q2.png", "255-f1.png", "256-q1.png", "256-q2.png", "256-f1.png", "257-q1.png", "257-q2.png", "257-f1.png", "258-q1.png", "258-q2.png", "258-f1.png", "259-q1.png", "259-q2.png", "259-f1.png", "260-q1.png", "260-q2.png", "260-f1.png", "261-q1.png", "261-q2.png", "261-f1.png", "262-q1.png", "262-q2.png", "262-f1.png", "263-q1.png", "263-q2.png", "263-f1.png", "264-q1.png", "264-q2.png", "264-f1.png", "265-q1.png", "265-q2.png", "265-f1.png", "266-q1.png", "266-q2.png", "266-f1.png", "267-q1.png", "267-q2.png", "267-f1.png", "268-q1.png", "268-q2.png", "268-f1.png", "269-q1.png", "269-q2.png", "269-f1.png", "270-q1.png", "270-q2.png", "270-f1.png", "271-q1.png", "271-q2.png", "271-f1.png", "272-q1.png", "272-q2.png", "272-f1.png", "273-q1.png", "273-q2.png", "273-f1.png", "274-q1.png", "274-q2.png", "274-f1.png", "275-q1.png", "275-q2.png", "275-f1.png", "276-q1.png", "276-q2.png", "276-f1.png", "277-q1.png", "277-q2.png", "277-f1.png", "278-q1.png", "278-q2.png", "278-f1.png", "279-q1.png", "279-q2.png", "279-f1.png", "280-q1.png", "280-q2.png", "280-f1.png", "281-q1.png", "281-q2.png", "281-f1.png", "282-q1.png", "282-q2.png", "282-f1.png", "283-q1.png", "283-q2.png", "283-f1.png", "284-q1.png", "284-q2.png", "284-f1.png", "285-q1.png", "285-q2.png", "285-f1.png", "286-q1.png", "286-q2.png", "286-f1.png", "287-q1.png", "287-q2.png", "287-f1.png", "288-q1.png", "288-q2.png", "288-f1.png", "291-q1.png", "291-q2.png", "291-f1.png", "292-q1.png", "292-q2.png", "292-f1.png", "293-q1.png", "293-q2.png", "293-f1.png", "gap2.png", "294-q2.png", "294-f1.png"];

cg.clearScreen = function(){
	ctx = c.getContext('2d');
	scene = new RB.Scene(c);
	w = c.width;
	h = c.height;
	fontFamily = "Arial, helvetica";
	pop = new Audio('pop.ogg');
	currentObj = null;

	scene.add( scene.rect(w, h, 'white') );
	scene.update();
}

$(d).keyup(function(e){

	var key = e.keyCode || e.which;

	if(key == 53 && currentObj){
		scene.remove(currentObj);
		scene.update();
		RB.destroyCanvas( currentObj.getCanvas().id );
		currentObj = null;
	}
	
	if( currentObj && (key==51) ){
		cg.hFlip(currentObj);
	}
	if( currentObj && (key==52) ){
		cg.vFlip(currentObj);
	}
});

$(d).keydown(function(event){
	
	var key = event.keyCode || event.which;

	if(key == 49 && currentObj){
		cg.zoomIn(currentObj);
	}
	
	if(key == 50 && currentObj){
		cg.zoomOut(currentObj);
	}
  if (key == 55 && currentObj) {
		// turn left
    cg.rotate(currentObj, -15);
  }
  if (key == 54 && currentObj) {
    // turn right
    cg.rotate(currentObj, 15);
  }

});

/* Mouse wheel function removed because it conflicts with page behaviour 
d.onmousewheel = function(mw){
	if(currentObj && mw.wheelDelta > 0){
		cg.zoomIn(currentObj);
	} else if (currentObj && mw.wheelDelta < 0){
		cg.zoomOut(currentObj);
	}
};
*/
//-->

cg.buildMinis = function(){
	var buffer = '';
	var imgString = "<img src='toons/IMG_URL' class='rc mini'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";
	
	for(var i=0; i < miniUrls.length; i++){
		buffer += link.replace(/IMG_URL/, toonUrls[i]);
		buffer += imgString.replace(/IMG_URL/, miniUrls[i]) + '</a>';
	}
	
	lib.append(buffer);
	

	$('#menuContainer').append( $('#instructs').clone() );
}

cg.buildMinis();

cg.buildMinitexts = function(){
	var buffer = '';
	var imgString = "<img src='texts/IMG_URL' class='rc minitext'></img>";
	var link = "<a href=\"javascript:cg.createImage('texts/IMG_URL')\">";
	
	for(var i=0; i < minitextUrls.length; i++){
		buffer += link.replace(/IMG_URL/, textUrls[i]);
		buffer += imgString.replace(/IMG_URL/, minitextUrls[i]) + '</a>';
	}
	
	libtext.append(buffer);
	
	$('#menuContainer2').append( $('#instructs2').clone() );
	}
	
cg.buildMinitexts();
	
cg.createImage = function(url){
	scene.image(url, function(obj){
		obj.draggable = true;
		obj.setXY(30, 30);
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		
		scene.add(obj);
		currentObj = obj;
		scene.update();
		pop.play();
	});
}

cg.createText = function(){
	var txt = prompt("Adicione um texto:");
	
	if(txt){
		var obj = scene.text(txt, fontFamily, 20, 'black');
		obj.setXY(40, 40);
		obj.draggable = true;
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		currentObj = obj;
		
		scene.add(obj);
		scene.update();
		pop.play();
	}
}

cg.createTextFromInput = function(e){

	var key = e.keyCode || e.which;
	var txt = $('#newText').val();
	
	if(key == 13){
		var obj = scene.text(txt, fontFamily, 20, 'black');
		obj.setXY(40, 40);
		obj.draggable = true;
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		currentObj = obj;
		
		scene.add(obj);
		scene.update();
		$('#newText').val('');
		pop.play();
	}
}

cg.saveImage = function(){
	var data = c.toDataURL("image/png", "image/octet-stream");
	var win = window.open();
	var b = win.document.body;
	var img = new Image();
	img.src = data;
	b.appendChild(img);
}

//var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

cg.zoomOut = function(obj){
	var w = obj.w * 0.05;
	var h = obj.h * 0.05;

	if(obj.w - w > 0 && obj.h - h > 0){
		obj.w -= w;
		obj.h -= h;
		
		obj.x += (w/2);
		obj.y += (h/2);
		
		scene.update();
	}
}

cg.zoomIn = function(obj){
	var w = obj.w * 0.05;
	var h = obj.h * 0.05;
	
	obj.w += w;
	obj.h += h;
	
	obj.x -= (w/2);
	obj.y -= (h/2);
	
	scene.update();
}

cg.hFlip = function(obj){
	var tmpCanvas = $(obj.getCanvas()).clone()[0];
	var img = obj.getCanvas();
	var tmpCtx = tmpCanvas.getContext('2d');
	var w = tmpCanvas.width;
	var h = tmpCanvas.height;
	
	//save current size and position
	var cW = obj.w, cH = obj.h, cX = obj.x, cY = obj.y;
	
	tmpCtx.translate(w/2, h/2);
	tmpCtx.scale(-1, 1);
	tmpCtx.drawImage(img, (-1*w/2), (-1*h/2));
	tmpCanvas.id = obj.getCanvas().id;
	obj.getCanvas().id = 'killme';
	
	RB.destroyCanvas('killme');
	d.body.appendChild(tmpCanvas);
	obj.setCanvas(tmpCanvas);
	obj.x=cX; obj.y=cY; obj.h=cH; obj.w=cW;	
	scene.update();
}


cg.vFlip = function(obj){
	var tmpCanvas = $(obj.getCanvas()).clone()[0];
	var img = obj.getCanvas();
	var tmpCtx = tmpCanvas.getContext('2d');
	var w = tmpCanvas.width;
	var h = tmpCanvas.height;
	
	//save current size and position
	var cW = obj.w, cH = obj.h, cX = obj.x, cY = obj.y;
	
	tmpCtx.translate(w/2, h/2);
	tmpCtx.scale(1, -1);
	tmpCtx.drawImage(img, (-1*w/2), (-1*h/2));
	tmpCanvas.id = obj.getCanvas().id;
	obj.getCanvas().id = 'killme';
	
	RB.destroyCanvas('killme');
	d.body.appendChild(tmpCanvas);
	obj.setCanvas(tmpCanvas);
	obj.x=cX; obj.y=cY; obj.h=cH; obj.w=cW;	
	scene.update();
}

cg.rotate = function rotate(obj, angle) {
  const img = obj.getCanvas();
  const tmpCanvas = $(img).clone()[0];
  const tmpCtx = tmpCanvas.getContext('2d');
  // tmpCtx.imageSmoothingEnabled = true;
  tmpCanvas.width += 100;
  tmpCanvas.height += 100;
  w = tmpCanvas.width;
  h = tmpCanvas.height;

  const cW = obj.w;
  const cH = obj.h;
  const cX = obj.x;
  const cY = obj.y;

  tmpCtx.translate(w / 2, h / 2);

  tmpCtx.rotate(angle * (Math.PI / 180));

  tmpCtx.drawImage(img, -cW / 2, -cH / 2);

  tmpCanvas.id = obj.getCanvas().id;
  obj.getCanvas().id = 'killme';

  RB.destroyCanvas('killme');
  d.body.appendChild(tmpCanvas);
  obj.setCanvas(tmpCanvas);
  // obj.setSCtx(tmpCtx);
  obj.setCtx(tmpCtx);
  obj.setXY(cX, cY);
  obj.h = h;
  obj.w = w;
  scene.update();
};

cg.setScreen = function(w, h){
	if(w && h && !isNaN(w) && !isNaN(h)){
		//var ok = confirm('All your work will be lost. Continue?');
		ok=true;
		if(ok){
			c.width = w;
			c.height = h;
			scene.update();
			//cg.clearScreen();
		}
	}
}

