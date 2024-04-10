// Tree

class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  class BSTree {
    constructor() {
      this.root = null;
    }

    isTreeEmpty() {
      return this.root === null;
    }
    makeTree(val) {
      let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(root, newNode) {
      if (root.value > newNode.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
    search(root, val) {
      if (root === null) {
        return false;
      } else if (root.value === val) {
        return true;
      } else if (root.value > val) {
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
    preOrder(root) {
      if (root) {
        console.warn(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }

    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.warn(root.value);
        this.inOrder(root.right);
      }
    }

    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.warn(root.value);
      }
    }

    bfsTraversing() {
      let queue = [];
      queue.push(this.root);
      while (queue.length) {
        let current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        console.warn(current.value);
      }
    }

    minValue(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.minValue(root.left);
      }
    }

    maxValue(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.maxValue(root.right);
      }
    }

    maxValue(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.maxValue(root.right);
      }
    }

    removeData(value) {
      this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root,value) {
      if (root === null) {
        return null;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value= this.minValue(root.right);
        root.right=this.deleteNode(root.right,root.value)
      }
      return root;
    }
  }

  let bst = new BSTree();
  bst.makeTree(20);
  bst.makeTree(10);
  bst.makeTree(5);
  bst.makeTree(11);
  bst.makeTree(30);
  bst.makeTree(40);
  bst.makeTree(23);
//   bst.preOrder(bst.root)
//   bst.inOrder(bst.root)
//   bst.postOrder(bst.root);
  // console.warn(bst.search(bst.root, 11));
//   bst.removeData(20);
  // bst.bfsTraversing(bst.root);
  console.warn(bst.root);
