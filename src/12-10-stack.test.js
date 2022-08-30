function createQueue() {
  const queue = [];

  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
  }

  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }

  function getSize() {
    return queue.length;
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
  };
}

describe("createQueue()", () => {
  it("all in one", () => {
    // empty queue
    const queue = createQueue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);

    // queue: 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);

    // queue: 2
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const one = queue.dequeue();
    expect(one).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(2);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const two = queue.dequeue();
    expect(two).toBe(2);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);
  });
});
