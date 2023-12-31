import { setInner } from "https://jscroot.github.io/element/croot.js";
import {get} from "https://jscroot.github.io/api/croot.js";

const responsFungsi = (data) => {
    setInner("Title", data.title);
    setInner("deskripsiProposal", data.description);
    
    setInner("judulProposal", data.isiProposal.judulProposal);
    setInner("deskripsi1", data.isiProposal.deskripsi1);
    setInner("latarbelakang1", data.isiProposal.latarBelakang1);
    setInner("latarbelakang2", data.isiProposal.latarBelakang2);
    setInner("latarbelakang3", data.isiProposal.latarBelakang3);
    setInner("latarbelakang4", data.isiProposal.latarBelakang4);
    
    setInner("name1", data.team[0].name1);
    setInner("npm1", data.team[0].npm1);
    setInner("email1", data.team[0].email1);
    setInner("github1", data.team[0].github1);
    setInner("foto1", `<img src="${data.team[0].foto1}"alt="image" style="border-radius: 50%; width: 200px; height: 200px;">`);
    setInner("name2", data.team[1].name2);
    setInner("npm2", data.team[1].npm2);
    setInner("email2", data.team[1].email2);
    setInner("github2", data.team[1].github2);
    setInner("foto2", `<img src="${data.team[1].foto2}" alt="image" style="border-radius: 50%; width: 200px; height: 200px;">`);

    setInner("jadwal", `<img src="${data.isiProposal.jadwal}"alt="image">`);
    

    // setInner("logo1", `<img src="${data.Logo.logo1}"alt="image">`);
    // setInner("logo2", `<img src="${data.Logo.logo1}"alt="image">`);
    // setInner("logo3", `<img src="${data.Logo.logo1}"alt="image">`);
    // setInner("logo4", `<img src="${data.Logo.logo1}"alt="image">`);
    // setInner("logo5", `<img src="${data.Logo.logo1}"alt="image">`);

    setInner("logo1", `<img src="${data.Logo.logo1}" alt="image" style="width: 100px; height: 100px;">`);
    setInner("logo2", `<img src="${data.Logo.logo2}" alt="image" style="width: 100px; height: 100px;">`);
    setInner("logo3", `<img src="${data.Logo.logo3}" alt="image" style="width: 100px; height: 100px;">`);
    setInner("logo4", `<img src="${data.Logo.logo4}" alt="image" style="width: 100px; height: 100px;">`);

    };

await get("https://raw.githubusercontent.com/erfahtech/proposal/main/json/isiproposal.json", responsFungsi);

