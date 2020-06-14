export default function isAuthenticated(){
    const ongId = localStorage.getItem('ongId');
    if(!ongId){
        alert('Realize login pra acessar a página.');
        return false;
    }
    return true;
    
};