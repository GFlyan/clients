import { IdentityView } from "./identity.view";

describe("IdentityView.fullName", () => {
  it("T1: todos os campos nulos -> undefined [CP1 / CT1 D90-FFFF]", () => {
    const identity = new IdentityView();
    expect(identity.fullName).toBeUndefined();
  });

  it("T2: apenas o título -> 'Mr' [CT2 D90-VFFF]", () => {
    const identity = new IdentityView();
    identity.title = "Mr";
    expect(identity.fullName).toBe("Mr");
  });

  it("T3: apenas o primeiro nome -> 'John' [CP4 / CT3 D90-FVFF]", () => {
    const identity = new IdentityView();
    identity.firstName = "John";
    expect(identity.fullName).toBe("John");
  });

  it("T4: apenas o nome do meio -> 'Q' [CT4 D90-FFVF]", () => {
    const identity = new IdentityView();
    identity.middleName = "Q";
    expect(identity.fullName).toBe("Q");
  });

  it("T5: apenas o sobrenome -> 'Public' [CT5 D90-FFFV]", () => {
    const identity = new IdentityView();
    identity.lastName = "Public";
    expect(identity.fullName).toBe("Public");
  });

  it("T6: nome completo concatenado com espaçamento correto [CP2]", () => {
    const identity = new IdentityView();
    identity.title = "Mr";
    identity.firstName = "John";
    identity.middleName = "Q";
    identity.lastName = "Public";
    expect(identity.fullName).toBe("Mr John Q Public");
  });

  it("T7: primeiro nome e sobrenome [CP3]", () => {
    const identity = new IdentityView();
    identity.firstName = "John";
    identity.lastName = "Doe";
    expect(identity.fullName).toBe("John Doe");
  });

  it("T8: ignora campo composto apenas por espaços em branco [CP5]", () => {
    const identity = new IdentityView();
    identity.firstName = "  ";
    identity.lastName = "Doe";
    expect(identity.fullName).toBe("Doe");
  });

  it("T9: campos presentes mas em branco -> string vazia [CP6]", () => {
    const identity = new IdentityView();
    identity.title = "";
    identity.firstName = "";
    identity.middleName = "";
    identity.lastName = "";
    expect(identity.fullName).toBe("");
  });
});
