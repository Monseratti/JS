var counter = 0;

class Contact {
  constructor(
    contName,
    contSurname,
    contMobile,
    contAge = null,
    contHome = null
  ) {
    this.id = counter;
    counter++;
    this.contName = contName;
    this.contSurname = contSurname;
    this.contMobile = contMobile;
    this.contAge = contAge;
    this.contHome = contHome;
  }
  view() {
    let container = document.getElementsByClassName("contactlist")[0];
    container.innerHTML += `<div class="row m-2">
    <div class="col-6 ms-2">
    <div class="contName text-info">${this.contName} ${this.contSurname}</div>
    <div class="contAge">${this.contAge}</div>
    <div class="contMobile">${this.contMobile}</div>
    <div class="contHome">${this.contHome}</div>
    </div>
    <div class="col-4">
    <button
    class="editBtn bg-transparent border border-0 fs-4 text-info fa fa-edit"
    ></button>
    <button
    class="closeBtn bg-transparent border border-0 fs-4 text-info fa fa-close"
    ></button>
    <div class="id">${this.id}</div>
    </div>
  </div>`;
  }
}

class ContactsBook {
  constructor(contacts = []) {
    this.contacts = contacts;
  }
  add(contact) {
    this.contacts.push(contact);
  }
  view() {
    let container = document.getElementsByClassName("contactlist")[0];

    for (let i = container.children.length - 1; i >= 0; i--) {
      container.removeChild(container.children[i]);
    }

    for (let i = 0; i < this.contacts.length; i++) {
      this.contacts[i].view();
      let thisEdit = document.getElementsByClassName("editBtn")[i];
      let thisClose = document.getElementsByClassName("closeBtn")[i];
      thisEdit.value = this.contacts[i].id;
      thisClose.value = this.contacts[i].id;
    }

    for (let editBtn of document.getElementsByClassName("editBtn")) {
      editBtn.addEventListener("click", function (e) {
        document
          .getElementsByClassName("addcontact")[0]
          .classList.remove("d-none");
        document.getElementsByTagName("body")[0].classList.remove("bg-light");
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "rgba(0,0,0,0.7)";
        let contact = contactBook.contacts.filter(
          (el) => el.id == e.target.value
        )[0];
        document.getElementById("pos_id").value = contact.id;
        document.getElementById("contName").value = contact.contName;
        document.getElementById("contSurname").value = contact.contSurname;
        document.getElementById("contMobile").value = contact.contMobile;
        document.getElementById("contAge").value = contact.contAge;
        document.getElementById("contHome").value = contact.contHome;
      });
    }

    for (let closeBtn of document.getElementsByClassName("closeBtn")) {
      closeBtn.addEventListener("click", function (e) {
        contactBook.contacts = contactBook.contacts.filter(
          (el) => el.id != e.target.value
        );
        contactBook.view();
      });
    }
  }
}

document.getElementById("btn").addEventListener("click", function () {
  document.getElementsByClassName("addcontact")[0].classList.remove("d-none");
  document.getElementsByTagName("body")[0].classList.remove("bg-light");
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "rgba(0,0,0,0.7)";
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("pos_id").value = null;
  document.getElementById("contName").value = null;
  document.getElementById("contSurname").value = null;
  document.getElementById("contMobile").value = null;
  document.getElementById("contAge").value = null;
  document.getElementById("contHome").value = null;
  document.getElementsByClassName("addcontact")[0].classList.add("d-none");
  document.getElementsByTagName("body")[0].classList.add("bg-light");
});

let contactBook = new ContactsBook();

document.getElementById("save").addEventListener("click", function () {
  if (document.getElementById("pos_id").value == "") {
    contactBook.add(
      new Contact(
        document.getElementById("contName").value,
        document.getElementById("contSurname").value,
        document.getElementById("contMobile").value,
        document.getElementById("contAge").value,
        document.getElementById("contHome").value
      )
    );
  } else {
    let contact = contactBook.contacts.filter(
      (el) => el.id == document.getElementById("pos_id").value
    )[0];
    contact.contName = document.getElementById("contName").value;
    contact.contSurname = document.getElementById("contSurname").value;
    contact.contMobile = document.getElementById("contMobile").value;
    contact.contAge = document.getElementById("contAge").value;
    contact.contHome = document.getElementById("contHome").value;
  }
  contactBook.view();
  document.getElementById("close").click();
});

// window.addEventListener("click", function () {
//   if (
//     !document
//       .getElementsByClassName("addcontact")[0]
//       .classList.contains("d-none")
//   ) {
//     document.getElementById("close").click();
//   }
// });
