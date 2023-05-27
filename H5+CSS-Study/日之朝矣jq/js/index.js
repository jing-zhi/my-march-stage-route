// 滚动到指定位置触发事件,顶部导航栏
/**
 * 获取参数元素与body的高度距离
 * @param {*} element 
 * @returns 该元素与body顶部的距离
 */
function getTop(element) {
    let offset = element.offsetTop;
    if(element.offsetParent != null)
        offset += getTop(element.offsetParent)
    return offset;
}
let myBlockTop = getTop(document.getElementById("rzzy"));
let topnavbar = document.getElementById("topnavbar");  // 顶部导航栏
let topls = topnavbar.getElementsByClassName('topbarcontent')[0];  // 这里可以直接用querySelector的，但是是老代码，就不乱动了
let topas = topls.getElementsByTagName("A");
let qm = document.getElementById("qm");
if(!!window.addEventListener){
    window.addEventListener("scroll", function () {
        // 使导航栏悬浮
        if(document.documentElement.scrollTop >= 2*myBlockTop || document.body.scroll >= 2*myBlockTop){
            topnavbar.style.backgroundColor = 'white';
            topnavbar.style.top = "0";
            topnavbar.style.position = 'fixed';
            topnavbar.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 5px 20px";
            qm.style.backgroundImage = "url(./img/qmb.png)"
            for(let i = 0; i < topas.length; i++){
                topas[i].style.color = "#000";
            }
        }else{
            topnavbar.style.background = 'transparent';
            topnavbar.style.top = "unset";
            topnavbar.style.position = 'absolute';
            topnavbar.style.boxShadow = "none";
            qm.style.backgroundImage = "url(./img/qm.png)"
            for(let i = 0; i < topas.length; i++){
                topas[i].style.color = "#FFF";
            }
        }

    })
}


// 自定义鼠标右击
// 阻止默认右击菜单
document.oncontextmenu = function (e) {
    e.preventDefault();
}
// 点击其他位置关闭菜单
function closeMenu(node) {
    node.style.opacity = "0";
    node.style.transform = "scale(0.5)";

    setTimeout(function () {
        node.style.display = 'none';
    },150);
}

// 添加右击事件方法
function rightClickMenu(usenode, menunode) {
    usenode.oncontextmenu = function (e) {
        //设置过渡
        menunode.style.transition='.25s cubic-bezier(0.65, 0.05, 0.1, 1)';

        //定位
        menunode.style.left = e.clientX+'px';
        menunode.style.top = e.clientY+scrollY+'px';
    
        //改变样式使其显示显示
        menunode.style.display = "block";
        // 将其设置为block后需要经过一个延迟，否则过渡会失效
        setTimeout(function () {
            menunode.style.opacity = '1';
            menunode.style.transform = "scale(1.05)";
        },100);
        setTimeout(() => menunode.style.transform = "scale(1)",350);
        
        addAct(menunode,this);

        // 点到其它位置关闭窗口
        window.onclick = function (e) {
            closeMenu(menunode);
        }
    }
}

// 给作品列表每一个作品都添加上右击菜单
let workMenu = document.getElementById("workRightClick");
let workli = document.getElementsByClassName("workbox");
for(let i = 0; i < workli.length - 1; i++){
    rightClickMenu(workli[i], workMenu);
}


// 作品列表项鼠标动作添加
function addAct(node, liNode) {
    // 通过判断liNode的值来判断是添加按钮调用还是作品框调用
    // console.log(liNode);
    if(!liNode) liNode = addwork(node);

    // 通过右键菜单弹出编辑框
    node.firstElementChild.firstElementChild.onclick = function (e) {
        popEidtFrame(liNode, e);
    }

    //右键菜单删除节点
    node.firstElementChild.lastElementChild.onclick = function () {
        delwork(liNode);   
    }

    // 关闭编辑框
    let setWorkinfo = document.getElementById("setWorkinfo");
    let editclose = document.getElementById('editclose');
    editclose.onclick = function (e) {
        closeMenu(setWorkinfo);
    }
    
}

// 弹出编辑框
function popEidtFrame(linode, e) {
    let setWorkinfo = document.getElementById("setWorkinfo");
    // 设置弹出位置
    if (e != undefined) {
        setWorkinfo.style.left = e.clientX+'px';
        setWorkinfo.style.top = e.clientY+scrollY+'px';
        // console.log(e.clientX);
        // console.log(e.clientY+scrollY);
        // console.log(linode.clientHeight);
    } else {
        setWorkinfo.style.left = document.documentElement.clientWidth * 0.5 - 150 +'px';
        setWorkinfo.style.top = window.scrollY + (document.documentElement.clientHeight * 0.5 - 127) +'px';
        // console.log(document.documentElement.clientHeight);
        // console.log(window.scrollY);
    }
    //过渡
    setWorkinfo.style.transition='.25s cubic-bezier(0.65, 0.05, 0.1, 1)';
    setWorkinfo.style.display = "block";
    
    setTimeout(() => {
        setWorkinfo.style.opacity = '1';
        setWorkinfo.style.transform = 'scale(1.05)';
    }, 100);
    setTimeout(() => setWorkinfo.style.transform = "scale(1)",350);
        
    //将内容放在编辑板上
    filingFrom(setWorkinfo, linode);
    
    //关闭
    let editclose = document.getElementById('editclose');
    editclose.onclick = function (e) {
        if(linode.id == "newWork"){
            delwork(linode);
        }
        closeMenu(setWorkinfo);
    }
}

// 内容填充
function filingFrom(editFramNode, liNode) {
    let origWrokUrl = liNode.getElementsByTagName('A')[0];
    let origWorkImg = liNode.getElementsByTagName('IMG')[0];
    let origWorkInfos = liNode.getElementsByTagName("P");
    let inpcontents = editFramNode.getElementsByClassName("inputCustom");
    
    //空链接的设置
    if (origWrokUrl.href == 'javascript:;'){
        inpcontents[0].value = "";
    }else{
        inpcontents[0].value = origWrokUrl.href;
    }
    
    inpcontents[1].value = origWorkImg.src;
    inpcontents[2].value = origWorkInfos[0].innerHTML;
    inpcontents[3].value = origWorkInfos[1].innerHTML;
    inpcontents[4].value =  origWorkInfos[2].innerHTML;

    let saveBut = editFramNode.lastElementChild;
    saveBut.onclick = function () {
        origWrokUrl.href = inpcontents[0].value;
        origWorkImg.src = inpcontents[1].value;
        origWorkInfos[0].innerHTML = inpcontents[2].value;
        origWorkInfos[1].innerHTML = inpcontents[3].value;
        origWorkInfos[2].innerHTML = inpcontents[4].value;
        if(liNode.id == "newWork"){
            liNode.id == "";
        }
        closeMenu(editFramNode);
    }
}

// 添加作品
function addwork(node) {
    // 创建各种元素
    let li = document.createElement("li");
    li.className = "workbox";
    li.id = "newWork"
    let a = document.createElement('a');
    a.href = "javascript:;";
    let workimg = document.createElement('img');
    let worktitle = document.createElement('p');
    let workdesc = document.createElement('p');
    let worktag = document.createElement('p');
    workimg.className = "workimg";
    worktitle.className = "worktitle";
    workdesc.className = "workdesc";
    worktag.className = "worktag";

    // 将新建的元素加入作品列表
    node.parentNode.insertBefore(li, node.parentNode.lastElementChild);
    li.appendChild(a);
    a.append(workimg);
    a.append(worktitle);
    a.append(workdesc);
    a.append(worktag);

    // li.style.display = "none";

    // 调用编辑框对新作品进行信息修改
    popEidtFrame(li);

    //添加右键菜单
    rightClickMenu(li, workMenu);

    return li;
}

//删除作品
function delwork(liNode) {
    liNode.parentNode.removeChild(liNode);
}

/**手风琴 */
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click',accordionChange);
});
function accordionChange() {
    if(this.classList.contains('panelOpen') == true){
        this.classList.remove('panelOpen');
    }else{
        this.classList.add('panelOpen');
    }
    panels.forEach(panel => {
        if(this != panel){
            panel.classList.remove('panelOpen');
        }
    });
}

/*打字机效果 */
const pageDesc = document.querySelector('.pageDescSpan');
const sentence = new Array();
sentence[0] = "这里是日之朝矣的个人主页。";
sentence[1] = "如你所见，一个极度无聊的网页。";
sentence[2] = "很显然，这个主页的主人是个老懒狗了。";
sentence[3] = "哦，我的上帝，这无聊的网页就像隔壁鲍勃叔叔家昨天打翻的苹果派一样烂。";
/* 内容切换 */
let sentenceIndex = 0;
function getSentence() {
    if(sentenceIndex > sentence.length - 1){
        sentenceIndex = 0;
        return sentence[sentenceIndex++];
    }else{
        return sentence[sentenceIndex++];
    }
}
/* 打字全过程 */ 
function typewriter() {
    let word = getSentence();
    let wordSpell = word.split('');
    let wordIndex = 0;
    let isTypingOver = false;

    let timer = setInterval(() => {
        if(isTypingOver){
            if(wordIndex >= 0){
                pageDesc.innerHTML = word.substring(0,wordIndex--);
            }else{
                clearInterval(timer);
                typewriter();
            }
        }else{
            if(wordIndex < wordSpell.length){
                pageDesc.innerHTML += wordSpell[wordIndex++];
                isTypingOver = false;
            }else{
                setTimeout(() =>{isTypingOver = true},1500);
            }
        }
    },100);
}   
typewriter();