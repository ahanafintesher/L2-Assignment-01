# How Do Access Modifiers Work in TypeScript OOP?

## Introduction

When building applications with TypeScript, we often use classes to organize related data and functions. But sometimes, we do not want every property to be accessible from everywhere. This is why TypeScript provides **Access Modifiers**. They help us control which parts of a class can be accessed from outside or from its child classes.

TypeScript mainly provides three access modifiers: `public`, `private`, and `protected`. It also has `readonly`, which controls whether a property can be reassigned.

## 1. Public

The `public` modifier allows a property or method to be accessed from anywhere. It is the default modifier, so we do not need to write it every time.

```typescript
class Person {
  public name: string = "Alice";
}

const person = new Person();
console.log(person.name);
```

Here, we can access the `name` property directly from the object.

## 2. Private

The `private` modifier allows a property or method to be accessed only inside its own class. We cannot directly access it from an object or a child class.

```typescript
class BankAccount {
  private balance: number = 5000;

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
console.log(account.getBalance());
```

This is useful when we want to protect important information, such as a bank account balance.

## 3. Protected

The `protected` modifier works similarly to `private`, but it also allows child classes to access the property or method.

```typescript
class Employee {
  protected name: string = "John";
}

class Manager extends Employee {
  showName(): string {
    return this.name;
  }
}
```

Here, the `Manager` class can access `name` because it extends the `Employee` class.

## 4. Readonly

The `readonly` modifier prevents a property from being reassigned after it has been initialized. We can assign its value when declaring it or inside the constructor.

```typescript
class Product {
  readonly id: number = 101;
}

const product = new Product();
console.log(product.id);
```

Trying to change `product.id` later will cause a TypeScript error.

## Conclusion

Access Modifiers are useful because they help us manage how data is accessed inside a program. We can use `public` for general access, `private` to keep data restricted, and `protected` when child classes also need access. On the other hand, `readonly` helps prevent accidental changes to important values. Using them properly makes our code more organized and easier to maintain.
